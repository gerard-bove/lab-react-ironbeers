import Header from '../components/Header'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
    const [beers, setBeers] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data)
        })
        .catch(err=>console.log(err))
    }, []);

    const filterHandler = (e) => {
        setFilter(e.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(response => {
            setBeers(response.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Header/>
            <label className="mx-auto m-2" htmlFor='filterInput'>Filter</label>
            <input id='filterInput' value={filter} onChange={filterHandler}/>
            <ul className="list-group">
                {beers && beers.map(beer => (
                    <li key={beer._id} className="list-group-item list-item">
                        <img src={beer.image_url} className="mx-auto mt-2" alt={beer.name}/>
                        <div className="card-body">
                            <Link className='link-style' to={`/beer/${beer._id}`}><h5 className="card-title">{beer.name}</h5></Link>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text">Created by: {beer.contributed_by}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Beers;