import './App.css';
import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Container/Navbar"
import BuildYourTeam from "./Container/BuildYourTeam"
import Collection from "./Container/Collection"
import Home from "./Container/Home"



// https://superheroapi.com/api/103705271929301/search/gladiator

const url = "http://localhost:9393/superheros"
const userUrl = "http://localhost:9393/users/"
const teamUrl = "http://localhost:9393/teams/"

class App extends Component{
  state = { 
    superheroes: [],
    filteredSuperheroes: [],
    superhero: null,
    team: [],
    collection: [],
    currentUser: null
  }

  componentDidMount(){
    fetch(url).then(resp => resp.json()).then(data => this.setState({superheroes: data.superhero, filteredSuperheroes: data.superhero}));
  }

  search = e => {
    let filterArr;
    filterArr = this.state.superheroes.filter(superhero => superhero.name.toLowerCase().includes(e.target.value)).filter(superhero => !this.state.team.includes(superhero))
    this.setState({filteredSuperheroes: filterArr})
  }

  viewDetails = hero => {
    if (this.state.superheroes.filter(superhero => superhero !== hero)){
      this.setState({superhero: hero})
    }
  }

  handleClick = () => {
    this.setState({superhero: null})
  }

  addToTeam = (hero) => {
    if (this.state.team.find(superhero => superhero === hero)){
      let filterTeam = this.state.team.filter(superhero => superhero !== hero)
      this.setState({team: filterTeam, filteredSuperheroes: this.state.superheroes.filter(superhero => !filterTeam.map(h => h).includes(superhero))})
    }else {
      let filterArr = this.state.superheroes.filter(superhero => superhero !== hero).filter(superhero => !this.state.team.includes(superhero))
      this.state.team.length < 3 ?
      this.setState({team: [...this.state.team, hero], filteredSuperheroes: filterArr}) : console.log("b") 
    }
  }

  postToCollection = (name, team) => {
    let teamNames = team.map(hero => hero.name).join(", ")
    let obj= {collection_id: 2, name: name, team: teamNames}
    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(obj)
    }
    fetch(teamUrl, reqPackage).then(res => res.json()).then(data => this.setState({collection: [...this.state.collection, data.collection], team:[]}))
  }

  deleteTeam = id => {
    fetch(teamUrl+id, {method: "DELETE"})
    let filter = this.state.collection.filter(team => team.id !== id)
    this.setState({collection: filter})
  }

  updateUser = (user, team) => {
    this.setState({currentUser: user, collection: team})
  }

  render(){
    return (
      <div>
        <Router>
          <Navbar/>
          <Route exact path="/" render={() => <Home updateUser={this.updateUser} currentUser={this.state.currentUser}/>}/>
          <Route exact path= "/createTeam" render={() => <BuildYourTeam filteredSuperheroes={this.state.filteredSuperheroes} search={this.search} 
          viewDetails={this.viewDetails} superhero={this.state.superhero} 
          handleClick={this.handleClick} addToTeam={this.addToTeam}
          team = {this.state.team} postToCollection={this.postToCollection}/>
          } />
          <Route exact path= "/collection" render= {() => 
          <Collection 
          collection={this.state.collection} viewDetails={this.viewDetails} 
          superheroes={this.state.superheroes} isFlipped={this.handleFlip}
          deleteTeam = {this.deleteTeam}/>}/>
        </Router>
      </div>
    )
  }
}
export default App;
