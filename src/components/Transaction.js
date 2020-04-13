import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ text, id, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'} key={id}>
            {text} <span>{sign}${Math.abs(amount)}</span>
            <button
                onClick={() => deleteTransaction(id)}
                className="delete-btn"
            >x</button>
        </li>
    )
}

export default Transaction
