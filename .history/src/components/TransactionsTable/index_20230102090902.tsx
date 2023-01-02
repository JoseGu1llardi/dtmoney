import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(res => res.json())
            .then(data => console.log(data));
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
