import { createContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    )
}