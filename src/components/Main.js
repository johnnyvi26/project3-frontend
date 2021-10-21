import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


function Main(props) {

    const [game, setGame] = useState(null);

    const URL ="https://project3-backend3.herokuapp.com/games";
    


    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                < Route
                    path="/games/:id"
                    render={(rp) => (
                        <Show {...rp} />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;