import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';

const Home = () => {
    // AQUI GUARDO MIS VARIABLES
    // const { state, saludo } = useContext(Context); // Primer Ejemplo AppContext
    const { store: { name, lastname }, actions } = useContext(Context); // Segundo Ejemplo AppContext

    useEffect(() => {
        actions.newMethod();
    }, [])

    return (
        <>
            {/* <Context.Consumer>
            {
                ({ name, lastname }) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 bg-secondary">
                                    <h1>Home</h1>
                                    <p className="display-5">{`${name} ${lastname}`}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-secondary">
                        <h1>Home</h1>
                        <p className="display-5">{`${name} ${lastname}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;