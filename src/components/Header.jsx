import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="h-28 flex items-center bg-body-beige px-7 2xl:px-32 drop-shadow-sm fixed w-full">
            <Link to="/" className="font-black text-2xl">#VANLIFE</Link>
            <nav className="ml-auto font-semibold text-header-gray flex gap-7">
                <Link to="/host" className="nav-link">Host</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/vans" className="nav-link">Vans</Link>
            </nav>
        </header>
    )
}