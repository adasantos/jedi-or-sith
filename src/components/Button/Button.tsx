import { Button as StyledButton, ButtonProps } from './Styles';

interface ButtonTesteProps extends ButtonProps {
    text: string;
}

function Button ({ onClick, path, disabled, text, ...rest}: ButtonTesteProps) {
    return (
        <StyledButton
            {...rest}
            type='button'
            onClick={onClick}
            path={path}
            disabled={disabled}
        >
            {text}
        </StyledButton>
    )
}

export default Button;