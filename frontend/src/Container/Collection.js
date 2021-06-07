import React, { Component } from "react"
import TeamCard from "../Component/TeamCard"



class Collection extends Component{ 
    render(){
        return (
            <div>
                {this.props.user ? this.props.collection.map(team => <TeamCard key={team.id} 
                superheroes={this.props.superheroes} 
                viewDetails={this.props.viewDetails} 
                team={team} 
                deleteTeam={this.props.deleteTeam}
                handleBattle={this.props.handleBattle}/>) : <h2>Please log in to manage your teams</h2>}          
            </div>    
        )
    }
}

export default Collection