import React from "react";
import TypePill from './TypePill.jsx';
import {useSearchParams} from 'react-router-dom';


export default function TypeFilter() {
    const types = ['simple', 'luxury', 'rugged']
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type")

    return (
        <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row sm:items-center items-start">
            <div className="flex gap-4">
                {
                    types.map(
                        (type) =>
                            <button key={type} onClick={() => setSearchParams({type: `${type}`})}>
                                <TypePill type={type} selected={typeFilter === type}/>
                            </button>
                    )
                }
            </div>
            {
                typeFilter &&
                <button onClick={() => setSearchParams('')}
                        className="ml-1 text-custom-gray font-medium underline underline-offset-4"
                >
                    Clear filters
                </button>
            }
        </div>
    )
}