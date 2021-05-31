const myTeam = ({hero, viewDetails, addToTeam}) => {
    return(
        <div className="team">
        <h3>{hero.name}</h3>
        <img src={hero.image} alt={hero.name} className="teamImg" />
        <button onClick= {()=> viewDetails(hero)}>View Details</button>
        <button onClick= {()=> addToTeam(hero)}>Remove from Team</button>
  </div>
    )
}

export default myTeam