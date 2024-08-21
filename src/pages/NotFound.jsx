import React from 'react';
import {Link} from 'react-router-dom';


export default function NotFound() {
    return (
        <section className="content-container w-">
            <div>
                <h1 className={"leading-tight mb-8"}>Sorry, the page you were looking for was not found.</h1>
                <Link to={"/"}>
                    <button className="bg-black text-white font-bold text-lg py-3 rounded-[5px] w-full md:w-64">Return to Home</button>
                </Link>
            </div>
        </section>
    )
}