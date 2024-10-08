import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans/Vans.jsx';
import Layout from './components/Layouts/Layout.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import HostLayout from './components/Layouts/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import NotFound from './pages/NotFound.jsx';



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
                    <Route path="vans" element={<HostVans/>}/>
                    <Route path="vans/:id" element={<HostVanDetail/>}>
                        <Route index element={<HostVanInfo/>}/>
                        <Route path={"pricing"} element={<HostVanPricing/>}/>
                        <Route path={"photos"} element={<HostVanPhotos/>}/>
                    </Route>
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>

                <Route path={"*"} element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
