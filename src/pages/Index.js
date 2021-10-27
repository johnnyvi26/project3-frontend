import { Link } from 'react-router-dom';
import { useState } from 'react';

function Index(props) {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        bio: "",
    });

    // handleChange Function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value});
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createGame(newForm);
        setNewForm({
            name: "",
            image: "",
            bio: "",
        });
    };

    
    // loaded function
    const loaded = () => {
        return props.games.map((game)=>(
            <div key={game._id} className="game">
                <Link to={`/games/${game._id}`}><h1>{game.name}</h1></Link>
                <img src={game.image} alt={game.name}/>
                <h3>{game.bio}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading......</h1>;
    };


    // return props.games ? loaded() : loading();
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.bio}
                    name="bio"
                    placeholder="bio"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Game" />
            </form>
            {props.games ? loaded() : loading()}
        </section>
    );
}

export default Index;