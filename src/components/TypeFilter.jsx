import React from "react";
import TypePill from './TypePill.jsx';
import {Link} from 'react-router-dom';


export default function TypeFilter() {
    const types = ['simple', 'luxury', 'rugged']

    return (
        <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row sm:items-center">
            <div className="flex gap-4">
                {
                    types.map(
                        (type) => <Link to={`?type=${type}`}><TypePill type={type} isDefault={true}/></Link>
                    )
                }
            </div>
            <Link to={"."} className="ml-1 text-custom-gray font-medium underline underline-offset-4"><p>Clear filters</p></Link>
        </div>
    )
}