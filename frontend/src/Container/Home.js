import React, {Component} from "react"
import Login from "../Component/Login"

class Home extends Component {
    render(){
        return(
            <div>
                {this.props.currentUser ? 
                <><h2>You are now logged in as {this.props.currentUser.username}</h2>
                <img className= "homeImg" src="https://wallpapercave.com/wp/wp6706903.jpg"/></> : 
                <Login updateUser={this.props.updateUser}/>}
            </div>
        )
    }
}

export default Home