import React from 'react';
import TypePill from '../TypePill.jsx';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'

export default function VerticalVanCard({van}) {
    const {id, name, price, description, imageUrl, type} = van

    return (
        <div className="flex flex-col gap-3 h-full group">
            <div className="h-4/5 overflow-hidden rounded-md">
                <img src={imageUrl}
                     alt="van"
                     className="object-cover h-full w-full group-hover:scale-110 duration-200 ease-in"
                />
            </div>
            <div className="flex flex-col sm:flex-row">
                <p className="font-semibold text-lg sm:text-xl whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</p>
                <p className="font-semibold text-lg sm:text-xl sm:ml-auto">${price}<span
                    className="text-xs">/day</span>
                </p>
            </div>
            <TypePill type={type} selected/>
        </div>

    )
}