import {Link, IconArrowLeft, Text} from './Styles';

interface BackButtonProps {
    path: string;
    routeNavigate: string
}

function BackButton(props: BackButtonProps) {
    return (
        <Link to={props.routeNavigate}>
            <IconArrowLeft path={props.path} size='40' />
            <Text path={props.path}>back</Text>
        </Link>
    )
}

export default BackButton;