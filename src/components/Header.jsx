import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="h-28 flex items-center bg-body-beige px-7">
            <Link to="/" className="font-black text-2xl">#VANLIFE</Link>
            <nav className="ml-auto font-semibold text-header-gray flex gap-7">
                <Link to="/about" className="hover:underline hover:underline-offset-4 hover:text-black">About</Link>
                <Link to="/vans" className="hover:underline hover:underline-offset-4 hover:text-black">Vans</Link>
            </nav>
        </header>
    )
}