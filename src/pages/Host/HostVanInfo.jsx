import React from 'react';
import {useOutletContext} from 'react-router-dom';


export default function HostVanInfo() {
    const currentVan = useOutletContext()

    return (
        <div className={"flex flex-col gap-4"}>
            <p className={'detail-info'}><span className="detail-label">Name:</span> {currentVan.name}</p>
            <p className={'detail-info'}><span className="detail-label">Category:</span> {currentVan.type}</p>
            <p className={'detail-info'}><span className="detail-label">Description:</span> {currentVan.description}</p>
            <p className={"detail-info"}><span className="detail-label">Visibility:</span> Public</p>
        </div>
    )
}