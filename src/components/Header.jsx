import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header-container">
            <Link to="/"><i className="fa-solid fa-house text-light icon-container"></i></Link>
        </div>
    )
}

export default Header;