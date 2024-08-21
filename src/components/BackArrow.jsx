import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function BackArrow({children}) {
    return (
        <p className="font-medium hover:underline underline-offset-4">
            <span className="mr-3">
                <FontAwesomeIcon icon={faArrowLeft} className="text-[#858585]"/>
            </span>
            {children}
        </p>
    )
}