import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={{backgroundColor: "#61dafb"}}>
            <Link to="/"><i className="fa-solid fa-house text-light"></i></Link>
        </div>
    )
}

export default Header;