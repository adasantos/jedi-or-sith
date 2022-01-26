import DarthVader from '../../assets/images/darth-vader.png';
import LukeSkywalker from '../../assets/images/luke-skywalker.png';

import Styles from './Styles';


interface MasterDataProps {
    path: string;
    masterName: string
}

function MasterData(props: MasterDataProps) {
    const masterImage = props.path === 'dark' ? DarthVader : LukeSkywalker;

    return (
        <Styles.Container>
            <Styles.Image src={masterImage} />
            <Styles.DescriptionContainer>
                <Styles.Text path={props.path}>Your master is</Styles.Text>
                <Styles.MasterName path={props.path}>{props.masterName}</Styles.MasterName>
            </Styles.DescriptionContainer>
        </Styles.Container>
    )
}

export default MasterData;