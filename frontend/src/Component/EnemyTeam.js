const EnemyTeam = ({enemy}) => { 
    const attack = Math.floor((enemy.combat+enemy.strength+enemy.power))
    const color = () => {
        if (enemy.hp >= 75){
            return "rgb(106, 212, 106)"
        } else if(enemy.hp >= 25) {
            return "yellow"
        }else {
            return "red"
        }
    }
    return(         
        <div className="info">
            <div>
                <img src={enemy.image}/>
            </div>
            <div className="infoContainer">
                <div className="hp">
                    <p>HP: {enemy.hp}</p>
                    <div className="healthContainer">
                        <div className="healthBar" style={{width: `${enemy.hp}%`, background: color()}}><p>{enemy.hp}%</p></div>
                    </div>
                </div>
                <div className="statInfo">
                    <div className="stats">
                        <p>Defense: {enemy.durability}</p>
                        <p>Attack: {attack}</p>
                    </div>
                </div> 
            </div> 
        </div>                                        
    ) 
}

export default EnemyTeam;