import Styles, { ButtonProps } from './Styles';

interface ButtonTesteProps extends ButtonProps {
    text: string;
}

function Button ({ onClick, path, disabled, text, ...rest}: ButtonTesteProps) {
    return (
        <Styles.Button
            {...rest}
            type='button'
            onClick={onClick}
            path={path}
            disabled={disabled}
        >
            {text}
        </Styles.Button>
    )
}

export default Button;