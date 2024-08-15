import React from 'react';
import TypePill from '../TypePill.jsx';


export default function HorizontalVanCard({van, showType=false}) {
    return (
        <div className="flex gap-4 h-full items-center">
            <img src={van.imageUrl} alt={`${van.name} van`} className={`rounded-[5px] h-full`} />
            <div>
                {showType && <TypePill type={van.type} size={'small'}/>}
                <p className={showType ? 'font-bold mt-4 text-[26px]' : `font-semibold text-xl`}>{van.name}</p>
                <p className={`font-medium`}>
                    <span className={showType ? 'font-bold text-xl' : ''}>${van.price}</span>
                    /day
                </p>
            </div>
        </div>
    )
}