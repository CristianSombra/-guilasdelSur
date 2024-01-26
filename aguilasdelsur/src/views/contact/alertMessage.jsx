import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({ message, type }) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <div className={`alert ${type}`}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertMessage;
