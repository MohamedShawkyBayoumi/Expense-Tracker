import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider 
            value={{
                transactions: state.transactions,
                deleteTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}