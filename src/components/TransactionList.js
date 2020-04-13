import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const context = useContext(GlobalContext);

    const { transactions } = context;

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.length > 0 && transactions.map(transaction => (
                    <Transaction {...transaction} key={transaction.id} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
