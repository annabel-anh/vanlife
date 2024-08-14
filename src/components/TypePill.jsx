import React from "react";

export default function TypePill({type}) {

    return (
        <div className={`rounded-md px-5 py-[6px] w-fit font-semibold text-tertiary-orange ${type}`}>
            {type}
        </div>
    )
}