import {Link} from 'react-router-dom';

function Home() {
    // min-h-svh
    return (
        <div className="relative bg-hero-image bg-center bg-cover bg-no-repeat h-full px-7 py-16 md:py-48 grow">
            {/*Overlay*/}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/*Content*/}
            <div
                className="relative z-10 text-white flex flex-col gap-7 md:gap-4 md:text-center md:justify-center md:items-center">
                <h1 className="font-extrabold text-4xl mb-0">You got the travel plans, we got the travel
                    vans.</h1>
                <p className="md:max-w-xl">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to
                    make your perfect road trip.
                </p>
                <Link to={'/vans'}>
                    <button className="bg-primary-orange hover:bg-primary-orange/90 rounded-md font-bold py-3 w-full md:w-64">
                        Find your van
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Home;