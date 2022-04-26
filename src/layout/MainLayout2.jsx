
import React from 'react';
import { Outlet } from 'react-router-dom';
import globals from 'assets/scss/globals.scss'




// import Loadding from '../components/Loadding';
import { ToastContainer } from 'react-toastify';

export default function MainLayout2() {

    return (
        <>
            {/* <SildeBar /> */}

            <div className='home' style={{ overflow: 'hidden' }}>
                <Outlet />
            </div>
            {/* <Loadding /> */}
            <ToastContainer />
        </>

    );
};