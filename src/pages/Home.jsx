import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Link } from "react-router-dom";


function Home() {
    
    return (
        <div className="card mb-3 mb-5 mx-auto">
            <div className="card mx-auto mt-5" style={{width: "18rem"}}>
                <img src={beers} className="card-img-top" alt="beers" />
                <div className="card-body">
                    <div><Link to="/beers" style={{textDecoration: "none", color:"black"}}><h5>All Beers</h5></Link></div>
                    <p className="card-text">Show all beers.</p>
                </div>
            </div>
            <div className="card mx-auto mt-5" style={{width: "18rem"}}>
                <img src={randomBeer} className="card-img-top" alt="beers" />
                <div className="card-body">
                    <Link to="/random-beer" style={{textDecoration: "none", color:"black"}}><h5>Random Beer</h5></Link>
                    <p className="card-text">Show random beer.</p>
                </div>
            </div>
            <div className="card mx-auto mt-5 mb-5" style={{width: "18rem"}}>
                <img src={newBeer} className="card-img-top" alt="beers" />
                <div className="card-body">
                    <Link to="/new-beer" style={{textDecoration: "none", color:"black"}}><h5>New Beer</h5></Link>
                    <p className="card-text">Create a new beer.</p>
                </div>
            </div>
        </div>
    )
    
}


export default Home;