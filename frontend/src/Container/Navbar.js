import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" id= "home">Home</NavLink>
            <NavLink to="/collection" id= "collection">Collection</NavLink>
        </div>
        
    )
}

export default Navbar