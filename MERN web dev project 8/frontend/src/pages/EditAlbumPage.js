import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditAlbumPage = ({ albumToEdit }) => {
 
    const [artist, setArtist]         = useState(albumToEdit.artist);
    const [name, setName]             = useState(albumToEdit.name);
    const [released, setReleased]     = useState(albumToEdit.released);
    const [genre, setGenre]           = useState(albumToEdit.genre);
    const [listens, setListens]       = useState(albumToEdit.listens);
    const [lastlisten, setLastlisten] = useState(albumToEdit.lastlisten);
    
    
    const redirect = useNavigate();

    const editAlbum = async () => {
        const response = await fetch(`/log/${albumToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                artist:     artist, 
                name:       name, 
                released:   released, 
                genre:      genre,
                listens:    listens,
                lastlisten: lastlisten
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`album document was successfully edited`);
        } else {
            const errMessage = await response.json();
            alert(`The album document failed to be edited; failure status: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit the information on any of the alums in your listening catalog</h2>
            <p>Here you can make edits to the information on any of the albums in your listening catalog.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                <legend>Here you can edit the album you selected</legend>
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
                        id="lastlisten" />

                    <label for="submit">
                    <button
                        onClick={editAlbum}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditAlbumPage;