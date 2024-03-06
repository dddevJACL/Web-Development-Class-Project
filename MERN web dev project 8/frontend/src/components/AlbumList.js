import React from 'react';
import Album from './Album';

function AlbumList({ albumscatalog, onDelete, onEdit }) {
    return (
        <table id="albumscatalog">
            <caption>Manage your album catalog by adding and editing them here</caption>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Name</th>
                    <th>Released</th>
                    <th>Genre</th>
                    <th>Listens</th>
                    <th>Last Listen</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {albumscatalog.map((album, i) => 
                    <Album 
                        album={album} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default AlbumList;
