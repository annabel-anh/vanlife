import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans/Vans.jsx';
import Layout from './components/Layout.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import HostLayout from './components/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';



function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="vans" element={<Vans/>}/>
                <Route path="vans/:id" element={<VanDetail/>}/>

                <Route path="host" element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="income" element={<Income/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
