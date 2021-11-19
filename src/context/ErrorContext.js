import React, { createContext, useState, useEffect } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 2000)
    }, [error])
    
    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}