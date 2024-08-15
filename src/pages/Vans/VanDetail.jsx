import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import TypePill from '../../components/TypePill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton'

export default function VanDetail() {
    const {id} = useParams()
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
                setLoading(false)
            })
    }, [id])

    const vanDetailElement = (
        <div className="flex flex-col gap-12 xl:flex-row">
            {/*Van image*/}
            <img src={van.imageUrl} alt={`${van.name} van`} className="rounded-md"/>
            {/*Van detail*/}
            <div className="flex flex-col gap-5">
                <TypePill type={van.type}/>
                <div className="flex flex-col gap-[10px]">
                    <h1 className="font-bold text-[32px]">{van.name}</h1>
                    <p className="font-bold text-2xl">${van.price}<span
                        className="font-medium text-[20px]">/day</span>
                    </p>
                    <p className="font-medium">{van.description}</p>
                </div>
                {/*Call to action*/}
                <button className="bg-primary-orange text-white rounded-md font-bold py-2 text-lg w-full">
                    Rent this van
                </button>
            </div>
        </div>
    )

    return (
            <div className="content-container flex flex-col gap-10">
                <Link to="/vans">
                    <p className="font-medium hover:underline underline-offset-4">
                        <span className="mr-3">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-[#858585]"/>
                        </span>
                        Back to all vans
                    </p>
                </Link>
                {loading ? 'loading...' : vanDetailElement}
            </div>
    )
}