import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState("");

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            setRandomBeer(response.data)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Header/>
            <div className="card m-5" style={{width: "18rem"}}>
                <img src={randomBeer.image_url} className="card-img-top mx-auto" style={{width: "20%"}} alt={randomBeer.name}/>
                <div className="card-body">
                    <h5 className="card-title">{randomBeer.name}</h5>
                    <p className="card-text">{randomBeer.tagline}</p>
                    <small className="text-muted">{randomBeer.first_brewed}</small>
                    <p className="card-text">{randomBeer.attenuation_level}</p>
                    <p className="card-text">{randomBeer.description}</p>
                    <small className="text-muted">{randomBeer.contributed_by}</small>
                </div>
            </div>
        </>
    )
}

export default RandomBeer;