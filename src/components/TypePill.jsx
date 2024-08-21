import React from "react";

export default function TypePill({type, size='normal', selected=false}) {
    const baseClass = 'van-type'
    const sizeClass =`${size}-pill`
    const allClasses = `${baseClass} ${type} ${sizeClass} ${selected ? 'selected' : ''}`

    return (
        <div className={allClasses}>
            {type}
        </div>
    )
}