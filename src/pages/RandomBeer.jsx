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
                <div className="card-body card-style">
                    <div>
                        <h5 className="card-title" style={{fontSize: '30px'}}>{randomBeer.name}</h5>
                        <p className="card-text" style={{color: 'grey', fontWeight: 'bold', fontSize: '22px'}}>{randomBeer.attenuation_level}</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className="card-text" style={{color: 'grey',fontSize: '18px'}}>{randomBeer.tagline}</p>
                        <p className="text-muted" style={{color: 'black',fontSize: '12px'}}>{randomBeer.first_brewed}</p>
                    </div>
                        <p className="card-text">{randomBeer.description}</p>
                        <small className="text-muted">{randomBeer.contributed_by}</small>
                </div>
            </div>
        </>
    )
}

export default RandomBeer;