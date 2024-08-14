import React from 'react';
import TypePill from './TypePill.jsx';
import {Link} from 'react-router-dom';

export default function VanCard({van}) {
    const {id, name, price, description, imageUrl, type} = van

    return (
        <Link to={`/vans/${van.id}`}>
            <div className="flex flex-col gap-3 h-full">
                <div className="h-4/5 overflow-hidden">
                    <img src={imageUrl} alt="van" className="object-cover h-full w-full rounded-md"/>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <p className="font-semibold text-lg sm:text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</p>
                    <p className="font-semibold text-lg sm:text-xl sm:ml-auto">${price}<span
                        className="text-xs">/day</span>
                    </p>
                </div>
                <TypePill type={type}/>
            </div>
        </Link>
    )
}