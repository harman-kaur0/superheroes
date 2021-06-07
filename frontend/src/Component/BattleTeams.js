

const BattleTeams = ({hero, selectHero, battleOver, inProcess}) => { 
    const attack = Math.floor((hero.combat+hero.strength+hero.power))
    const color = () => {
        if (hero.hp >= 75){
            return "rgb(106, 212, 106)"
        } else if(hero.hp >= 25) {
            return "yellow"
        }else {
            return "red"
        }
    }
    return(         
        <div className="info">
            <div>
                <img src={hero.image}/>
            </div>
            <div className="infoContainer">
                <div className="hp">
                    <p>HP: {hero.hp}</p>
                    <div className="healthContainer">
                        <div className="healthBar" style={{width: `${hero.hp}%`, background: color()}}><p>{hero.hp}%</p></div>
                    </div>
                </div>
                <div className="statsInfo">
                    <div className="stats">
                        <p>Defense: {hero.durability}</p>
                        <p>Attack: {attack}</p>
                    </div>
                    <div className="battleBtn">
                       {inProcess || battleOver ? null: <button className= {hero.k} onClick= {(e) => selectHero(e)}>Select</button> }
                    </div>
                </div> 
            </div> 
        </div>                            
    ) 
}

export default BattleTeams;