import React from 'react';
import {useOutletContext} from 'react-router-dom';


export default function HostVanPricing() {
    const currentVan = useOutletContext()

    return (
        <p className={"text-custom-gray"}>
            <span className={"font-medium text-2xl text-black"}>
            {Intl.NumberFormat('en-EN', {style: 'currency', currency: 'USD'}).format(currentVan.price)}
            </span>/day
        </p>
    )
}