import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import Layout from './components/Layout.jsx';


function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/vans" element={<Vans/>}>
                  <Route path="/vans/:id"></Route>
              </Route>
          </Route>
      </Routes>
  )
}

export default App
