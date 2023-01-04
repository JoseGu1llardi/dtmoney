import { useContext, useState } from 'react';

import { TransactionsContext } from '../../contexts/TransactionsContext';

import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Logo income" />
                </header>
                <strong>R$ 1,000,00</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Logo outcome" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Logo total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}
