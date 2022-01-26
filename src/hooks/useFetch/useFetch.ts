import { useEffect, useState } from 'react';

import api from '../../services/api';

const useFetch = () => {
    const [ data, setData ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    function getJediPath() {
        return api.get('/1');
    }
        
    function getSithPath() {
        return api.get('/4');
    }
        
    async function choiceYourPath() {
        setLoading(true);

        await Promise
            .race([getJediPath(), getSithPath()])
            .then((response) => {
                console.log(response.data);
                setData(response.data.name);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        choiceYourPath();

        // Disable react-hooks/exhaustive-deps, beacause it only need load one time
        // eslint-disable-next-line    
    }, []);

    return {
        data,
        loading,
        error,
        choiceYourPath,
        setLoading,
    }
}

export default useFetch;
