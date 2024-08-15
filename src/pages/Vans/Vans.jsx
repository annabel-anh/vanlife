import React, {useEffect, useState} from 'react';
import VerticalVanCard from '../../components/Cards/VerticalVanCard.jsx';
import {Link} from 'react-router-dom';


function Vans() {
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
    }, [])


    return (
        <div className="content-container">
            <h1>Explore our van options</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                {loading ? 'loading...' : vans.map(van => {
                    return (
                        <Link to={`/vans/${van.id}`} key={van.id}>
                            <VerticalVanCard van={van}/>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}

export default Vans;