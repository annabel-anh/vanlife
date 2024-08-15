import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function Header() {
    const links = [
        {to: '/about', label: 'About'},
        {to: '/vans', label: 'Vans'},
        {to: '/host', label: 'Host'}
    ]

    return (
        <header className="h-28 flex items-center bg-body-beige px-7 2xl:px-32 drop-shadow-sm fixed w-full">
            <Link to="/" className="font-black text-2xl">#VANLIFE</Link>
            <Navbar links={links} className="ml-auto"/>
        </header>
    )
}