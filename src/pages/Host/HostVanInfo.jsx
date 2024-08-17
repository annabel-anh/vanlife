import React from 'react';
import {useOutletContext} from 'react-router-dom';


export default function HostVanInfo() {
    const currentVan = useOutletContext()

    return (
        <div className={"flex flex-col gap-4"}>
            <h4 className={'detail-info'}><span className="detail-label">Name:</span> {currentVan.name}</h4>
            <h4 className={'detail-info'}><span className="detail-label">Type:</span> {currentVan.type}</h4>
            <h4 className={'detail-info'}><span className="detail-label">Description:</span> {currentVan.description}</h4>
            <h4 className={"detail-info"}><span className="detail-label">Visibility:</span> Public</h4>
        </div>
    )
}