import { useContext } from 'react';

import { TransactionsContext } from '../../contexts/useTransactions';

import { Container } from './styles';

export function TransactionTable() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('de-DE', {
                                        style: 'currency',
                                        currency: 'EUR'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}
