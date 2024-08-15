import React, {useEffect, useState} from 'react';
import VanCard from '../../components/VanCard.jsx';


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
            <h1 className="font-bold text-[32px]">Explore our van options</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                {loading ? 'loading...' : vans.map(van => <VanCard van={van} key={van.id}/>)}
            </div>
        </div>

    )
}

export default Vans;