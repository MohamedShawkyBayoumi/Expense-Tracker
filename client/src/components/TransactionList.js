import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions, getTransaction } = useContext(GlobalContext);

    useEffect(() => {
        getTransaction();
    }, []);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.length > 0 && transactions.map(transaction => (
                    <Transaction {...transaction} key={transaction._id} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
