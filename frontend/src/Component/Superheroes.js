const Superheroes = ({superhero, viewDetails, addToTeam}) => {
    return (  
        <div className="card">
            <h2>{superhero.name}</h2>
            <img src={superhero.image} alt={superhero.name} className="superhero-avatar" />
            <button onClick= {()=> viewDetails(superhero)}>View Details</button>
            <button onClick={() => addToTeam(superhero)}>Add to Team</button>
      </div>
    )
}

export default Superheroes