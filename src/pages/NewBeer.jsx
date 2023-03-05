import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState("");
    const [contributed_by, setContributedBy] = useState("");
    const [errorForm, setErrorForm] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if(name==="" || tagline==="" || description==="" || first_brewed==="" || brewers_tips==="" || attenuation_level==="" || contributed_by==="") setErrorForm(true)
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
    }

    return (
        <>
            <Header />
            <form onSubmit={submitHandler} className="mt-5">
                {errorForm && <div className="alert alert-danger" role="alert">There are some mistake</div>}
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputTagline" className="col-sm-2 col-form-label">Tagline</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputTagline" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputFirstBrewed" className="col-sm-2 col-form-label">First brewed</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputFirstBrewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputBrewerstips" className="col-sm-2 col-form-label">Brewers_tips</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputBrewerstips" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputAtenuationlevel" className="col-sm-2 col-form-label">Attenuation level</label>
                    <div className="col-sm-9">
                    <input type="Number" className="form-control" id="inputAtenuationlevel" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputContributed" className="col-sm-2 col-form-label">Contrubuted by</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputContributed" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create a beer</button>
            </form>
        </>
    )
}

export default NewBeer;