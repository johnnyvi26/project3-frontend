import { Link } from "react-router-dom";

function Header(props){
    return (
        <nav className="nav">
            <h1 className="title">GameHub</h1>
            <Link to="/">
                <div className="games" >Games App</div>
            </Link>
        </nav>
    );
}

export default Header;