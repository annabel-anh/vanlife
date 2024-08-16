import React from 'react';
import {useOutletContext} from 'react-router-dom';


export default function HostVanPhotos() {
    const currentVan = useOutletContext()

    return (
        <img src={currentVan.imageUrl} alt={currentVan.name} className="w-[100px] rounded"/>
    )
}