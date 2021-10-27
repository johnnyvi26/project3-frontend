import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


function Main(props) {

    const [games, setGames] = useState(null);

    const URL ="https://project3-backend3.herokuapp.com/games/";

    const getGames = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setGames(data);
    };

    const createGame = async (game) => {
        // make post request to create game
        await fetch(URL, {
            method: "POST",
            headers: {
                "Context-Type": "Application/json",
            },
            body: JSON.stringify(game),
        });
        // update list of game
        getGames(); 
    };

    const updateGame = async (game, id) => {
        // make a PUT request to create game
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(game),
        });
        // update list of games
        getGames();
    };

    const deleteGame = async id => {
        // make a delete request to create game
        await fetch(URL + id, {
            method: "DELETE",
        });
        // update list of games
        getGames();
    };



    useEffect(() => getGames(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index games={games} createGame={createGame} />
                </Route>
                < Route
                    path="/games/:id"
                    render={(rp) => (
                        <Show 
                        games={games}
                        updateGame={updateGame}
                        deleteGame={deleteGame}
                        {...rp} 
                        />
                    )}
                />
            </Switch>
        </main>
    );
};

export default Main;