import React, {useEffect, useState} from 'react';
import BackArrow from '../../components/BackArrow.jsx';
import {Link, Outlet, useParams} from 'react-router-dom';
import HorizontalVanCard from '../../components/Cards/HorizontalVanCard.jsx';
import Navbar from '../../components/Layouts/Navbar.jsx';


export default function HostVanDetail() {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState({})
    const [loading, setLoading] = useState(true)
    const links = [
        {to: '.', label: 'Details'},
        {to: 'pricing', label: 'Pricing'},
        {to: 'photos', label: 'Photos'}
    ]

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data.vans[0])
                setLoading(false)
            })
    }, [id])


    const hostVanDetailElement = (
        <div className="h-[150px]">
            <HorizontalVanCard van={currentVan} showType={true}/>
        </div>
    )

    return (
        <>
            <Link to={'..'} relative={'path'}>
                <BackArrow>Back to all vans</BackArrow>
            </Link>
            {
                loading ?
                    <p className="mt-9">looking for the van...</p> :
                    <section className="bg-white p-4 rounded-md shadow-sm mt-9">
                        {hostVanDetailElement}
                        <Navbar links={links} className={"my-7"}/>
                        <Outlet context={currentVan}/>
                    </section>
            }
        </>

    )
}