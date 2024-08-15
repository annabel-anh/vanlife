import React, {useEffect, useState} from 'react';
import HorizontalVanCard from '../../components/Cards/HorizontalVanCard.jsx';
import {Link} from 'react-router-dom';

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => {
                setHostVans(data.vans)
                setLoading(false)
            })
    }, [])


    return (
        <>
            <h1>Your listed vans</h1>
            {
                loading ?
                'loading your vans...' :
                <section className="flex flex-col gap-4">
                    {hostVans.map(van => {
                        return (
                            <Link to={`/host/vans/${van.id}`} key={van.id}>
                                <div className="bg-white p-4 rounded-md h-[100px] shadow-sm">
                                    <HorizontalVanCard van={van}/>
                                </div>
                            </Link>
                        )
                    })}
                </section>
            }
        </>
    )
}