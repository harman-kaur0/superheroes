import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className= "home">Home</NavLink>
            <NavLink to="/createTeam" className= "home">Build Your Team</NavLink> 
            <NavLink to="/collection" className= "home">My Teams</NavLink>
        </div>
        
    )
}

export default Navbar