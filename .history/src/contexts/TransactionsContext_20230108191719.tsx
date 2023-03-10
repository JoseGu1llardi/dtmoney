import { createContext, useState, useEffect, ReactNode } from "react";

import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderPros {
    children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderPros) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', transactionInput);

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}