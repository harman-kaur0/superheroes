const Teams = ({team}) => {
    return (
        <div>
            <ul>
                <li>
                    <h2>{team.name}</h2>
                    <h4>{team.team}</h4>
                </li>
            </ul>
        </div>
    )
}

export default Teams