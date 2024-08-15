import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="grow bg-body-beige flex flex-col mt-28">
                {<Outlet/>}
            </main>
            <Footer/>
        </div>
    )
}