import { useState } from 'react';

function Show(props) {
    const id = props.match.params.id;
    const games = props.games;
    const game = games.find(g => g._id === id);

    // state form
    const [editForm, setEditForm] = useState(game);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value});
    }
    
    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateGame(editForm, game._id);
        // redirect games back to index
        props.history.push('/');
    }
    
    // handle deletegame
    const removeGame = () => {
        props.deleteGame(game._id);
        props.history.push('/');
    }

    return(
        <div className="game">
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} />
            <h2>{game.bio}</h2>
            <button id="delete" onClick={removeGame}>
                DELETE
            </button>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.bio}
                    name="bio"
                    placeholder="bio"
                    onChange={handleChange}
                />
                <input type="submit" value="Update game" />
            </form>
        </div>
    )
}

export default Show;