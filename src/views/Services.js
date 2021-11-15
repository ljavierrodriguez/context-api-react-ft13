import React, { useContext, useState } from 'react';
import { Context } from '../store/AppContext';

const Services = () => {
    // AQUI GUARDO MIS VARIABLES
    const { store: { services } } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Services</h1>
                    <ul className="list-">
                        {
                            services.map((service, index) => <li className="list-group-item" key={index}>{service.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;