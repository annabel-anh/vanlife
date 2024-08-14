import React from "react";
import {Link} from 'react-router-dom';

function About() {
    return (
        <>
            <img src="src/assets/images/about_img.jpg" alt="camping" className="h-60 w-full object-cover md:h-96"/>

            <div className="mx-7 my-12 lg:mx-32 2xl:mx-96 flex flex-col gap-12">
                {/*About content*/}
                <section>
                    <h1 className="font-bold text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="mt-7 font-medium">
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
                        recertified before each trip to ensure your travel plans can go off without a hitch.
                        <br/>(Hitch costs extra 😉)
                    </p>
                    <p className="mt-4 font-medium">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4
                        wheels.
                    </p>
                </section>

                {/*Call to action*/}
                <aside className="bg-secondary-orange p-9 rounded-md">
                    <p className="font-bold text-2xl">Your destination is waiting. <br/> Your van is ready.</p>
                    <button className="mt-7 bg-black text-white font-bold px-6 py-3 rounded-xl">
                        <Link to="/vans">Explore our vans</Link>
                    </button>
                </aside>
            </div>
        </>
    )
}

export default About;