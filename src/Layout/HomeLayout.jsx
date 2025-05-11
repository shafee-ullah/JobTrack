import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-117px)] py-8'>
            <Outlet />
            </div>
           
            <Footer />
        </div>
    );
};

export default HomeLayout;