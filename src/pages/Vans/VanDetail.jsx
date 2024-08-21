import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import TypePill from '../../components/TypePill.jsx';
import BackArrow from '../../components/BackArrow.jsx';

export default function VanDetail() {
    const {id} = useParams()
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    const search = location.state?.search || ''
    const type = location.state?.type || 'all'


    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
                setLoading(false)
            })
    }, [id])

    const vanDetailElement = (
        <div className="flex flex-col gap-12 xl:flex-row mt-9">
            {/*Van image*/}
            <img src={van.imageUrl} alt={`${van.name} van`} className="rounded-md"/>
            {/*Van detail*/}
            <div className="flex flex-col gap-5">
                <TypePill type={van.type} selected/>
                <div className="flex flex-col gap-[10px]">
                    <h1 className="mb-0">{van.name}</h1>
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
            <div className="content-container">
                <Link to={search ? `../?${search}` : '..'} relative={'path'}>
                    <BackArrow>{`Back to ${type} vans`}</BackArrow>
                </Link>
                {loading ? <p className="mt-9">looking for the van...</p> : vanDetailElement}
            </div>
    )
}