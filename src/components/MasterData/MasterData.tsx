import DarthVader from '../../assets/images/darth-vader.png';
import LukeSkywalker from '../../assets/images/luke-skywalker.png';

import {Container, Image, DescriptionContainer, Text, MasterName} from './Styles';


interface MasterDataProps {
    path: string;
    masterName: string
}

function MasterData(props: MasterDataProps) {
    const masterImage = props.path === 'dark' ? DarthVader : LukeSkywalker;

    return (
        <Container>
            <Image src={masterImage} />
            <DescriptionContainer>
                <Text path={props.path}>Your master is</Text>
                <MasterName path={props.path}>{props.masterName}</MasterName>
            </DescriptionContainer>
        </Container>
    )
}

export default MasterData;