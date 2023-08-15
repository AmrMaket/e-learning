import '../../base.css'
import './styles.css'

const GamesList = (props) => {

    const games = props.games;

    return (
        <div className="games-main-container flex flex-col align-center padding-m border">
            <h2 className='padding-s'>Games</h2>
            <div className="games-list flex flex-col gap-l">
                {games.map((game) => (
                    <div className="game-preview flex flex-col padding-s justify-center align-center gap-s card-border" key={game.id}>
                        <h3>{game.title}</h3>
                        <div>Game link: {game.link}</div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
 
export default GamesList;