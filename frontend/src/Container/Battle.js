import React, {Component} from "react"
import BattleTeams from "../Component/BattleTeams"
import EnemyTeam from "../Component/EnemyTeam"
import BattleGround from "../Component/BattleGround"
import Ending from "../Component/Ending"

class Battle extends Component {
   state = {
       myTeam: this.props.battleTeam,
       enemyTeam: this.props.randomTeam,
       selectedHero: null,
       selectedEnemy: null,
       inProcess: false,
       battleOver:  false,
       won: false,
       lose: false,
       draw: false
   }

   selectHero = (e) => {
        let hero = this.state.myTeam.find(hero => hero.k === parseInt(e.target.className))
        let filterEnemy = this.state.enemyTeam.filter(enemy => enemy.hp > 0)
        let enemy =  filterEnemy[Math.floor(Math.random()*filterEnemy.length)]
        this.setState({selectedEnemy: enemy, selectedHero: hero, inProcess: true})
   }

   handleAttack = () => {
       const enemy = this.state.selectedEnemy;
       const hero = this.state.selectedHero;
       var enemyDamage = this.calculateDamage(hero, enemy)
       var heroDamage = this.calculateDamage(enemy, hero)
       var enemyHp = enemy.hp - enemyDamage;
       var heroHp = hero.hp - heroDamage;
       var updatedHeroTeam = this.state.myTeam.map(h => h === hero ? {...h, hp: heroHp}: h)
       var updatedEnemyTeam = this.state.enemyTeam.map(h => h === enemy ? {...h, hp: enemyHp}: h)
       this.setState({selectedEnemy: null, selectedHero: null, inProcess: false, myTeam: updatedHeroTeam, enemyTeam: updatedEnemyTeam}, () => {
           let filterEnemy = this.state.enemyTeam.filter(enemy => enemy.hp > 0);
           let filterHero = this.state.myTeam.filter(hero => hero.hp > 0);
           if (filterEnemy.length === 0){
                this.setState({battleOver: true, won: true})
           }
           else if (filterEnemy.length > 0 && filterHero.length === 0){
               this.setState({battleOver: true, lose: true})
           }
           else if (filterHero.length === 0 && filterEnemy.length === 0){
               this.setState({battleOver: true, draw: true})
           }
        })
   }

   playAgain = () => {
       this.setState({enemyTeam: this.props.randomTeam, myTeam: this.props.battleTeam, won:false, draw: false, lose: false, battleOver: false})
   }

   calculateDamage = (attacker, defender) => {
    const attack = attacker.combat+attacker.strength+attacker.power
    const defense = defender.durability
    return Math.floor((attack - defense)/3)     
   }
    render(){
        return(
            this.state.myTeam ?
                <div className="battleContainer">
                    <div className="enemyTeam">
                        {this.state.enemyTeam.filter(enemy => enemy.hp > 0).map(enemy=> <EnemyTeam  enemy={enemy} key={enemy.id}/>)}
                    </div>
                    <div className="battleGround">
                        {this.state.inProcess ? <BattleGround handleAttack = {this.handleAttack} selectedHero={this.state.selectedHero} selectedEnemy={this.state.selectedEnemy}/>: <Ending playAgain= {this.playAgain} battleOver = {this.state.battleOver} lose= {this.state.lose} won={this.state.won} draw= {this.state.draw}/>}
                    </div>
                    <div className="myTeam">
                        {this.state.myTeam.filter(hero => hero.hp > 0).map(hero => <BattleTeams battleOver = {this.state.battleOver} inProcess= {this.state.inProcess} selectHero ={this.selectHero} hero={hero} key={hero.id}/>)}
                    </div>
                </div> : null
        )
    }
}

export default Battle;