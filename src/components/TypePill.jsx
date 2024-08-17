import React from "react";

export default function TypePill({type, size='normal', className='', isDefault=false}) {
    const baseClass = 'filter-pill'
    const  typeClass = type ? `${type}-hover:${type}` : ''
    const sizeClass =`${size}-pill`
    const notDefaultClass = !isDefault ? `${type}-active` : ''
    const allClasses = `${baseClass} ${typeClass} ${sizeClass} ${className} ${notDefaultClass}`

    return (
        <div className={allClasses}>
            {type}
        </div>
    )
}