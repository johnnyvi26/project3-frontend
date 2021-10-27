function Show(props) {
    const id = props.match.params.id;
    const games = props.games;
    const game = games.find(g => g._id === id);
    
    
    return(
        <div className="game">
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} />
            <h2>{game.bio}</h2>

        </div>
    )
}

export default Show;