import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="Logo Guillardi Money" />
            <button>
                New transaction
            </button>
        </Container>
    )
}