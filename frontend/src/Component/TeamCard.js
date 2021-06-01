import React, { Component } from 'react'
import ReactCardFlip from  'react-card-flip'

class TeamCard extends Component{
    heroes = this.props.team.team.split(", ").map(name => this.props.superheroes.find(hero => hero.name === name)) 

    render(){
        return(
            <div>
                <div>
                    <h2>{this.props.team.name} <br/><button onClick={() => this.props.deleteTeam(this.props.team.id)}>Delete Team</button>
                    </h2> 
                </div> 
                <div className="collectionCard">      
                    {this.heroes.map(hero => {
                        return (
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="teamCard" className="flip-card-front">
                                        <h2>{hero.name}</h2>
                                        <img src={hero.image} alt={hero.name} className="teamImage" />
                                    </div>
                                    <div className="teamCard" className="flip-card-back">
                                    <p>Gender: {hero.gender}</p>
                                    <p>Height: {hero.height}</p>
                                    <p>Weight: {hero.weight}</p>
                                    <p>Intelligence: {hero.intelligence}</p>
                                    <p>Strength: {hero.strength}</p>
                                    <p>Speed: {hero.speed}</p>
                                    <p>Durability: {hero.durability}</p>
                                    <p>Power: {hero.power}</p>
                                    <p>Combat: {hero.combat}</p>
                                    </div>
                                </div>                    
                            </div>             
                            )
                        })}
                </div>      
            </div>
        )
    }
}

export default TeamCard