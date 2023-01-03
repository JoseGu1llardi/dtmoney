import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data));
    }, []);

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
                    <tr>
                        <td>Website development</td>
                        <td className='deposit'>R$ 12,000,00</td>
                        <td>Development</td>
                        <td>20/10/2022</td>
                    </tr>

                    <tr>
                        <td>Rent</td>
                        <td className="withdraw">- R$ 1,000,00</td>
                        <td>House</td>
                        <td>20/10/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}
