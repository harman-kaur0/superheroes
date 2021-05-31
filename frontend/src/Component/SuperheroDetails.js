
const SuperheroDetails = ({superhero, handleClick, addToTeam}) => {
    return(
        <div className="cards"> 
            <div className="bio">
                <h1>{superhero.name}</h1>
                <img src={superhero.image} alt={superhero.name} className="superhero-avatar" />
                <button onClick={() => addToTeam(superhero)}>Add to Team</button>
                <button onClick={handleClick}>Return</button>
            </div>
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Gender: </th>
                            <td>{superhero.height}</td>
                        </tr>
                        <tr>
                            <th>Weight: </th>
                            <td>{superhero.weight}</td>
                        </tr>
                        <tr>
                            <th>Intelligence: </th>
                            <td>{superhero.intelligence}</td>
                        </tr>
                        <tr>
                            <th>Strength: </th>
                            <td>{superhero.strength}</td>
                        </tr>
                        <tr>
                            <th>Speed: </th>
                            <td>{superhero.speed}</td>
                        </tr>
                        <tr>
                            <th>Durability: </th>
                            <td>{superhero.durability}</td>
                        </tr>
                        <tr>
                            <th>Power: </th>
                            <td>{superhero.power}</td>
                        </tr>
                        <tr>
                            <th>Combat: </th>
                            <td>{superhero.combat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    )
}

export default SuperheroDetails