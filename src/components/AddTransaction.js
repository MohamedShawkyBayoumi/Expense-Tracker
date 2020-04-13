import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState(''),
          [amount, setAmount] = useState(0),
          textRef = useRef(null);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
        textRef.current.focus();
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} ref={textRef} onChange={e => setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="text">
                        Amount <br /> (negative = expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
