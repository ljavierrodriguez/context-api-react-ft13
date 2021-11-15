import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);

const AppContext = ({ children }) => {

    const [state, setState] = useState({
        name: 'Luis',
        lastname: 'Rodriguez',
        services: [
            { id: 1, name: 'Plomeria' },
            { id: 2, name: 'Jardineria' },
            { id: 3, name: 'Seguridad' },
        ]
    })

    useEffect(() => {

    }, [])

    const saludo = () => {
        alert(`${state.name} ${state.lastname}`);
    }

    const saludo2 = () => {
        alert(`${state.name} ${state.lastname}`);
    }

    return (
        <Context.Provider value={{ state, setState, saludo, saludo2 }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;