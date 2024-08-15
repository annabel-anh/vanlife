
import Footer from './Footer.jsx';
import {Link, Outlet} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import React from 'react';

export default function Layout() {
    const links = [
        {to: 'about', label: 'About'},
        {to: 'vans', label: 'Vans'},
        {to: 'host', label: 'Host'}
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/*need z-10 here to make sure VanCard doesn't pop in front of navbar when VanCard's hovered*/}
            <header className="z-10 h-28 flex items-center bg-body-beige px-7 2xl:px-32 drop-shadow-sm fixed w-full">
                <Link to={'/'} className="font-black text-2xl">#VANLIFE</Link>
                <Navbar links={links} className="ml-auto"/>
            </header>
            <main className="grow bg-body-beige flex flex-col mt-28">
                {<Outlet/>}
            </main>
            <Footer/>
        </div>
    )
}