import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="grow">{<Outlet/>}</div>
            <Footer/>
        </div>
    )
}