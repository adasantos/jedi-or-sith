import { useEffect, useState } from 'react';

import api from '../../services/api';

type SideOfTheForceProps = {
    name: string;
}

const useFetch = () => {
    const [ data, setData ] = useState<SideOfTheForceProps>({} as SideOfTheForceProps);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    function getJediPath() {
        return api.get('/1');
    }
        
    function getSithPath() {
        return api.get('/4');
    }
        
    async function choiceYourPath() {
        await Promise
            .race([getJediPath(), getSithPath()])
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        setLoading(true);

        choiceYourPath();
    // Disable react-hooks/exhaustive-deps, beacause it only need load one time
    // eslint-disable-next-line    
    }, []);


    return {
        data,
        loading,
        error,
        choiceYourPath
    }
}

export default useFetch;
