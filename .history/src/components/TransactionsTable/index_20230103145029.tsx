import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data));
    }, []);

    console.log(transactions);

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
                            <tr>
                                <td>{transaction.title}</td>
                                <td className='deposit'>R$ 12,000,00</td>
                                <td>Development</td>
                                <td>20/10/2022</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}
