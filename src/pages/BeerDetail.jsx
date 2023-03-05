import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function BeerDetail() {
    const [beer, setBeer] = useState("")

    const { idBeer } = useParams();
    
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + idBeer)
        .then(response => {
            setBeer(response.data)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Header/>
            <div className="card m-5" style={{width: "18rem"}}>
                <img src={beer.image_url} className="card-img-top mx-auto" style={{width: "20%"}} alt={beer.name}/>
                <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="card-text">{beer.tagline}</p>
                    <small className="text-muted">{beer.first_brewed}</small>
                    <p className="card-text">{beer.attenuation_level}</p>
                    <p className="card-text">{beer.description}</p>
                    <small className="text-muted">{beer.contributed_by}</small>
                </div>
            </div>
        </>
    )
}

export default BeerDetail;