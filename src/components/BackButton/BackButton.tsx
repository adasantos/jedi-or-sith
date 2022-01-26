import Styles from './Styles';

interface BackButtonProps {
    path: string;
    routeNavigate: string
}

function BackButton(props: BackButtonProps) {
    return (
        <Styles.Link to={props.routeNavigate}>
            <Styles.IconArrowLeft path={props.path} size='40' />
            <Styles.Text path={props.path}>back</Styles.Text>
        </Styles.Link>
    )
}

export default BackButton;