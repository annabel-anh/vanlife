import React from 'react';
import Navbar from './Navbar.jsx';
import {Outlet} from 'react-router-dom';


export default function HostLayout() {
    const links = [
        {to: '/host', label: 'Dashboard'},
        {to: '/host/income', label: 'Income'},
        {to: '/host/reviews', label: 'Reviews'}
    ]

    return (
        <div className="content-container">
            <Navbar links={links} className="mb-11 text-lg"/>
            <Outlet/>
        </div>
    )

}