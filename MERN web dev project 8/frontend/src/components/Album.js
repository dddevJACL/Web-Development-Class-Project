import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Album({ album, onEdit, onDelete }) {
    return (
        <tr>
            <td>{album.artist}</td>
            <td>{album.name}</td>
            <td>{album.released}</td>
            <td>{album.genre}</td>
            <td>{album.listens}</td>
            <td>{album.lastlisten}</td>
            <td><MdDeleteForever onClick={() => onDelete(album._id)} /></td>
            <td><MdEdit onClick={() => onEdit(album._id)} /></td>
        </tr>
    );
}

export default Album;