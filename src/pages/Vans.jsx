import React, {useEffect, useState} from 'react';
import VanCard from '../components/VanCard.jsx';
import {Link} from 'react-router-dom';

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    return (
        <div className="mx-7 my-20">
            <h1 className="font-bold text-2xl">Explore our van options</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
                {vans.map(van => <VanCard van={van} key={van.id}/>)}
            </div>
        </div>

    )
}

export default Vans;