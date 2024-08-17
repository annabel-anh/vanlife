import React from "react";
import { NavLink } from 'react-router-dom';


export default function Navbar({ links, className }) {
    return (
        <nav className={`flex gap-7  max-[400px]:gap-4 ${className}`}>
            {links.map((link, index) =>
                <NavLink
                    to={link.to}
                    key={index}
                    className={({isActive}) => "nav-link" + (isActive ? " active-link" : "")}
                    end = {link.to === '.'}
                >
                    {link.label}
                </NavLink>
            )}
        </nav>
    )
}