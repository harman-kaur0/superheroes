import {withRouter} from "react-router-dom"
const Ending = ({won, draw, lose, battleOver, playAgain, history}) => {
    const images = () => {
        if (won) {
            return "https://media3.giphy.com/media/14bhmZtBNhVnIk/giphy.gif?cid=790b7611965f7fb62fafd6ac36b4fff1504b9f98f230840f&rid=giphy.gif&ct=g"
        } else if (lose) {
            return "https://i.gifer.com/73cL.gif"
        } else if (draw) {
            return "https://64.media.tumblr.com/8bc096cebf1cbed8eb232b96ae46a737/tumblr_pjomqn5fqa1wzvt9qo1_640.gifv"
        }
    }
    return (
        <div className= "endingImg" style= {{"background-image": `url(${images()})`}}>
            {battleOver ? 
            <div className="startOver">
                <button onClick={playAgain}>Play Again</button>
                <button onClick={() => history.push("/collection")}>Choose a new Team</button>
            </div>: 
        null}
    </div>
    )
}

export default withRouter(Ending);