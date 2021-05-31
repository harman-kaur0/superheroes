import Teams from "../Component/Teams"
const Collection = ({collection}) => {
    return (
        <div>
            {collection.map(team => <Teams team={team}/>)}
        </div>
    )
}

export default Collection