
const SearchByName = props => {
    return (
        <div className="search">
          <input onChange={props.search} placeholder="search for your superhero..."/>
        </div>
    )
  }
  

export default SearchByName