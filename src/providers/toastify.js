import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastifyProvider = ({ children }) => {
    return (
        <React.Fragment>
            {children}
            <ToastContainer />
        </React.Fragment>
    );
};

export default ToastifyProvider;
