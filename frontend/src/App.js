import './App.css';
import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Container/Navbar"
import Home from "./Container/Home"
import Collection from "./Container/Collection"


// https://superheroapi.com/api/103705271929301/search/gladiator

const url = "http://localhost:9393/superheros"
const collectionUrl = "http://localhost:9393/collections"

class App extends Component{
  state = { 
    superheroes: [],
    filteredSuperheroes: [],
    superhero: null,
    team: [],
    collection: []
  }

  componentDidMount(){
    fetch(url).then(resp => resp.json()).then(data => this.setState({superheroes: data.superhero, filteredSuperheroes: data.superhero}))
    fetch(collectionUrl).then(resp => resp.json()).then(data => this.setState({collection: data.collection}))
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
    let obj= {name: name, team: teamNames}
    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(obj)
    }
    fetch(collectionUrl, reqPackage).then(res => res.json()).then(data => this.setState({collection: [...this.state.collection, data.collection]}))
  }

  render(){
    return (
      <div>
        <Router>
          <Navbar/>
          <Route exact path= "/" render={() => <Home filteredSuperheroes={this.state.filteredSuperheroes} search={this.search} 
          viewDetails={this.viewDetails} superhero={this.state.superhero} 
          handleClick={this.handleClick} addToTeam={this.addToTeam}
          team = {this.state.team} postToCollection={this.postToCollection}/>
          } />
          <Route exact path= "collection" render= {() => <Collection collection={this.state.collection}/>}/>
        </Router>
      </div>
    )
  }
}
export default App;
