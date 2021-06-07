const BattleGround = ({selectedHero, selectedEnemy, handleAttack}) => {
    return (
        <div className="battleHero">
            <img src={selectedHero.image}/>
            <button onClick = {handleAttack}>Attack</button>
            <img src={selectedEnemy.image}/>
        </div>
    )
}


export default BattleGround;