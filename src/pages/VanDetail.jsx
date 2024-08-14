import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import TypePill from '../components/TypePill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function VanDetail() {
    const {id} = useParams()
    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return (
        <div className="mx-7 mb-20 mt-10 flex flex-col gap-10 2xl:mx-32">
            <Link to="/vans">
                <p className="font-medium hover:underline underline-offset-4">
                    <span className="mr-3"><FontAwesomeIcon icon={faArrowLeft} className="text-[#858585]"/></span>
                    Back to all vans
                </p>
            </Link>
            <div className="flex flex-col gap-12 xl:flex-row">
                <img src={van.imageUrl} alt={`${van.name} van`} className="rounded-md"/>
                <div className="flex flex-col gap-5">
                    <TypePill type={van.type}/>
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="font-bold text-[32px]">{van.name}</h1>
                        <p className="font-bold text-2xl">${van.price}<span
                            className="font-medium text-[20px]">/day</span>
                        </p>
                        <p className="font-medium">{van.description}</p>
                    </div>
                    <button className="bg-primary-orange text-white rounded-md font-bold py-2 text-lg w-full">
                        Rent this van
                    </button>
                </div>

            </div>
        </div>
    )
}