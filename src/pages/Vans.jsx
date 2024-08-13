import React, {useEffect, useState} from 'react';

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    return (
        <div>
            <h1>Vans page</h1>
            {vans.map((van, i) => <p key={i}>{van.name}</p>) }

        </div>

    )
}

export default Vans;