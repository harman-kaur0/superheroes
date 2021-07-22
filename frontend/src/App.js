import './App.css';
import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Container/Navbar"
import BuildYourTeam from "./Container/BuildYourTeam"
import Collection from "./Container/Collection"
import Home from "./Container/Home"
import Battle from "./Container/Battle"




// https://superheroapi.com/api/103705271929301/search/gladiator

const url = "http://localhost:9393/superheros"
const teamUrl = "http://localhost:9393/teams/"

class App extends Component{
  state = { 
    superheroes: [],
    filteredSuperheroes: [],
    superhero: null,
    team: [],
    collection: [],
    currentUser: null,
    battleTeam: null,
    randomTeam: [],
    fightingHero: null
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
    let user_id;
    this.state.currentUser ? user_id = this.state.currentUser.id : console.log("none")
    let obj= {user_id, name: name, team: teamNames}
    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(obj)
    }
    this.state.currentUser ?
    fetch(teamUrl, reqPackage).then(res => res.json()).then(data => this.setState({collection: [...this.state.collection, data.collection], team:[]}))
    : alert("Log in to build your team!!!")
  }

  deleteTeam = id => {
    fetch(teamUrl+id, {method: "DELETE"})
    let filter = this.state.collection.filter(team => team.id !== id)
    this.setState({collection: filter})
  }

  updateUser = (user, team) => {
    this.setState({currentUser: user, collection: team})
  }

  logOut = () => {
    this.setState({currentUser: null})
  }

  enemyTeam = (callback) => {
    var newArr = [];
    for (var i=0; i<3; i++){
      var rand = JSON.parse(JSON.stringify(this.state.superheroes[Math.floor(Math.random()*29)]))
      newArr.push(rand)
    }
    this.setState({randomTeam: newArr.map((hero, idx) => ({...hero, hp: 100, k: idx}))}, () => {
      if (callback) callback()
    })
  }

  handleBattle = team => {
    var myTeam = team.team.split(", ").map(name => JSON.parse(JSON.stringify(this.state.superheroes.find(hero => hero.name === name))))
    this.enemyTeam()
    this.setState({ battleTeam: myTeam.map((hero, idx) => ({...hero, hp: 100, k: idx}))})
  }


  render(){
    return (
      <div>
        
        <Router>
          <Navbar/>
          <Route exact path="/" render={() => <Home updateUser={this.updateUser} currentUser={this.state.currentUser} logOut={this.logOut}/>}/>
          <Route path= "/createTeam" render={() => <BuildYourTeam filteredSuperheroes={this.state.filteredSuperheroes} search={this.search} 
          viewDetails={this.viewDetails} superhero={this.state.superhero} 
          handleClick={this.handleClick} addToTeam={this.addToTeam}
          team = {this.state.team} postToCollection={this.postToCollection}/>
          } />
          <Route path= "/collection" render= {() => 
          <Collection 
          collection={this.state.collection} viewDetails={this.viewDetails} 
          superheroes={this.state.superheroes} isFlipped={this.handleFlip}
          deleteTeam = {this.deleteTeam} user={this.state.currentUser}
          handleBattle={this.handleBattle}/>}/>
          <Route path = "/battle" render={() => <Battle 
          battleTeam={this.state.battleTeam} 
          superheroes={this.state.superheroes}
          user={this.state.currentUser}
          randomTeam={this.state.randomTeam}
          defendentTeam={this.enemyTeam}/>}/>
        </Router>
      </div>
    )
  }
}
export default App;
