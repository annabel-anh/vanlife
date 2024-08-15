import React from 'react';
import Navbar from './Navbar.jsx';
import {Outlet} from 'react-router-dom';


export default function HostLayout() {
    const links = [
        {to: '.', label: 'Dashboard'},
        {to: 'income', label: 'Income'},
        {to: 'vans', label: 'Vans'},
        {to: 'reviews', label: 'Reviews'}
    ]

    return (
        <div className="content-container">
            <Navbar links={links} className="mb-11 text-lg"/>
            <Outlet/>
        </div>
    )

}