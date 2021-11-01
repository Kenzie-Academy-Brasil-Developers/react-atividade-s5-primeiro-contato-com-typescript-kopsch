import { InputProps } from '../../interfaces/input.interface'
import { StyledInput, Container } from './styles'

const Input = ({placeholder, label, ...rest}: InputProps) => {
    return (
        <Container>
            {label && <label>{label}</label>}
            <StyledInput placeholder={placeholder} {...rest}/>
        </Container>
    )
}

export default Input
