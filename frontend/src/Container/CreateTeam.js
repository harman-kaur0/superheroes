import React, {Component} from "react"
import MyTeam from "../Component/MyTeam"

class CreateTeam extends Component {
    state = {
        name: ""
    }
    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postToCollection(this.state.name, this.props.team)
    }

    render(){
        return(
            <div>
                <h2>Build Your Team</h2>
                <p>limit of 3 per team</p>
                <div className="alignTeam">
                    {this.props.team.map(hero => <MyTeam hero={hero} key={hero.id} viewDetails={this.props.viewDetails} 
                    addToTeam={this.props.addToTeam}/>)}
                </div>
                <div className="collection">
                    {this.props.team.length === 3 ?
                     <form onSubmit={e => this.handleSubmit(e)}>
                     <input onChange= {this.handleChange} placeholder="name your team..." name="name" required/>    
                     <button>Add to Collection</button>
                 </form>: null}
                </div>
            </div>
        )
    }
}

export default CreateTeam