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
        /* if(filter !== "") { */
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
            .then(response => {
                setBeers(response.data)
            })
            .catch(err => console.log(err))
        //}
    }

    return (
        <>
            <Header/>
            <label className="mx-auto m-2" htmlFor='filterInput'>Filter</label>
            <input id='filterInput' value={filter} onChange={filterHandler}/>
            <div className="row">
                {beers && beers.map(beer => (
                    <div key={beer._id} className="card mx-auto m-2 col-sm-6" style={{width: "18rem"}}>
                        <img src={beer.image_url} className="card-img-top mx-auto mt-2" style={{width: "70px"}} alt={beer.name}/>
                        <div className="card-body">
                            <Link to={`/beer/${beer._id}`}><h5 className="card-title">{beer.name}</h5></Link>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text">{beer.contributed_by}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Beers;