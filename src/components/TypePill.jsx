import React from "react";

export default function TypePill({type, size='normal'}) {
    return (
        <div className={`w-fit font-semibold text-tertiary-orange ${type} ${size}-pill`}>
            {type}
        </div>
    )
}