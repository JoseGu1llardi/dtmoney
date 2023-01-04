import { createContext, useState, useEffect, ReactNode } from "react";

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

interface TransactionProviderPros {
    children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderPros) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}