import React, {Component} from "react"
import Superheroes from "../Component/Superheroes"
import SearchByName from "../Component/SearchByName"
import SuperheroDetails from "../Component/SuperheroDetails"
import CreateTeam from "./CreateTeam"

class Home extends Component{
    render(){
        return(
            <div className="superHeroCard">
                <CreateTeam team= {this.props.team} viewDetails={this.props.viewDetails} addToTeam={this.props.addToTeam} postToCollection={this.props.postToCollection}/>
                <SearchByName search={this.props.search}/>
                {this.props.superhero ?
                <SuperheroDetails superhero={this.props.superhero} handleClick= {this.props.handleClick} addToTeam={this.props.addToTeam}/> :
                <div className="heroes">{this.props.filteredSuperheroes.map(superhero =><Superheroes superhero={superhero} key={superhero.id} viewDetails={this.props.viewDetails} addToTeam={this.props.addToTeam}/>)}</div>}
            </div>   
        )
    }
}

export default Home