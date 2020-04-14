import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format'

const Transaction = ({ text, _id, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'} key={_id}>
            {text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span>
            <button
                onClick={() => deleteTransaction(_id)}
                className="delete-btn"
            >x</button>
        </li>
    )
}

export default Transaction
