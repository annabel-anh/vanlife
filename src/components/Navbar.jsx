import React from "react";
import {Link} from 'react-router-dom';


export default function Navbar({ links, className }) {
    return (
        <nav className={`font-semibold text-header-gray flex gap-7 ${className}`}>
            {links.map((link, index) =>
                <Link to={link.to} className="nav-link" key={index}>{link.label}</Link>
            )}
        </nav>
    )
}