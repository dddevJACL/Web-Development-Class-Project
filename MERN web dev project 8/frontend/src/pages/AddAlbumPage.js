
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddAlbumPage = () => {

    const [artist, setArtist]         = useState('');
    const [name, setName]             = useState('');
    const [released, setReleased]     = useState('');
    const [genre, setGenre]           = useState('');
    const [listens, setListens]       = useState('');
    const [lastlisten, setLastlisten] = useState('');
    
    const redirect = useNavigate();

    const addAlbum = async () => {
        const newAlbum = { artist, name, released, genre, listens, lastlisten };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`new album document added`);
            redirect("/");
        } else {
            alert(`The new album document was not added. Status code: ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a new album to the listening catalog</h2>
            <p>Add the following information to add a new album to the listening catalog.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What album are you adding to the listening catalog?</legend>
                    <label for="artist">Name of the album's artist</label>
                    <input
                        type="text"
                        placeholder="Name of the band / artist"
                        value={artist}
                        onChange={e => setArtist(e.target.value)} 
                        id="artist" />
                    
                    <label for="name">Name of the album</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Name of the album"
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="released">Year the album was released</label>
                    <input
                        type="date"
                        value={released}
                        placeholder="Year the album was released"
                        onChange={e => setReleased(e.target.value)} 
                        id="released" />

                    <label for="genre">The album's genre</label>
                    <input
                        type="text"
                        placeholder="The main, or sub-genre of the album"
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        id="genre" />

                    <label for="listens">How many times have you listened?</label>
                    <input
                        type="number"
                        value={listens}
                        placeholder="How many times have you listened?"
                        onChange={e => setListens(e.target.value)} 
                        id="listens" />
                    
                    
                    <label for="lastlisten">When did you listen to the album last?</label>
                    <input
                        type="date"
                        value={lastlisten}
                        placeholder="The last time you listened to the album"
                        onChange={e => setLastlisten(e.target.value)} 
                        id="lastlisten" 
                        />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addAlbum}
                        id="submit"
                    >Add this album</button> to the listening catalog</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddAlbumPage;