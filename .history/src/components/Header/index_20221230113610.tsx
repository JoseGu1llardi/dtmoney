import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="Logo Guillardi Money" />
            <button>
                New transaction
            </button>
        </header>
    )
}