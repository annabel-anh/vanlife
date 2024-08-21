import React, {useEffect, useState} from 'react';
import VerticalVanCard from '../../components/Cards/VerticalVanCard.jsx';
import {Link, useSearchParams} from 'react-router-dom';
import TypeFilter from '../../components/TypeFilter.jsx';


function Vans() {
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase())
        : vans


    return (
        <div className="content-container">
            <h1>Explore our van options</h1>
            <TypeFilter/>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                {loading ? 'loading...' : displayedVans.map(van => {
                    return (
                        <Link
                            to={`${van.id}`}
                            key={van.id}
                            state={{search: `${searchParams.toString()}`, type: typeFilter}}
                        >
                            <VerticalVanCard van={van}/>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}

export default Vans;