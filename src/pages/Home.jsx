import React from "react";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <main className="h-full">
                <div className="relative bg-hero-image bg-center bg-cover bg-no-repeat h-full w-full px-7 py-16 md:py-32">
                    {/*Overlay*/}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/*Content*/}
                    <div className="relative z-10 text-white flex flex-col gap-7 md:gap-4 md:text-center md:justify-center md:items-center md:h-full md:w-full">
                        <h1 className="font-extrabold text-4xl">You got the travel plans, we got the travel
                            vans.</h1>
                        <p className="md:max-w-xl">
                            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to
                            make your perfect road trip.
                        </p>
                        <button className="bg-button-orange rounded-md font-bold py-3 w-full md:w-64">
                            <Link to="/vans">Find your van</Link>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;