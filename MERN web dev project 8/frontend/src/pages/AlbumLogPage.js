import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AlbumList from '../components/AlbumList';

function AlbumLogPage({ setAlbum }) {
  
    const redirect = useNavigate();

   
    const [albumscatalog, setAlbums] = useState([]);

    const loadAlbums = async () => {
        const response = await fetch('/log');
        const albumscatalog = await response.json();
        setAlbums(albumscatalog);
    } 
    

  
    const onEditAlbum = async album => {
        setAlbum(album);
        redirect("/edit-album");
    }


 
    const onDeleteAlbum = async id => {
        const response = await fetch(`/log/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const albumscatalog = await getResponse.json();
            setAlbums(albumscatalog);
        } else {
            console.error(`Was unable to delete the following movie: ${id}, The status code was: ${response.status}`)
        }
    }



    useEffect(() => {
        loadAlbums();
    }, []);



    return (
        <>
            <h2>This is a log to track listening history to various albums</h2>
            <p>This is a page intended to track the albums I've listened to, and some basic information on the albums.</p>
            <AlbumList 
                albumscatalog={albumscatalog} 
                onEdit={onEditAlbum} 
                onDelete={onDeleteAlbum} 
            />
        </>
    );
}

export default AlbumLogPage;