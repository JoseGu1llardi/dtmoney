import { Container } from './styles';

import incomeImg from '../../assets/income.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImg} alt="Logo income" />
                </header>
            </div>
        </Container>
    )
}
