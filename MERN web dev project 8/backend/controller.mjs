import 'dotenv/config';
import express from 'express';
import * as albumscatalog from './model.mjs';

const PORT = process.env.PORT;
const app = express();


app.use(express.json());  



app.post ('/log', (req,res) => { 
    albumscatalog.createAlbum(
        req.body.artist, 
        req.body.name, 
        req.body.released, 
        req.body.genre, 
        req.body.listens,
        req.body.lastlisten
        )
        .then(album => {
            res.status(201).json(album);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'failed to create album document' });
        });
});





app.get('/log', (req, res) => {
    albumscatalog.findAlbum()
        .then(album => { 
            if (album !== null) {
                res.json(album);
            } else {
                res.status(404).json({ Error: 'Error: Album document not found' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error: Failed to retrieve album document' });
        });
});





app.get('/log/:id', (req, res) => {
    albumscatalog.retrieveAlbumByID(req.params.id)
    .then(album => { 
        if (album !== null) {
            res.json(album);
        } else {
            res.status(404).json({ Error: 'Error: Album not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error: Failed to retrieve album' });
    });

});





app.delete('/log/:id', (req, res) => {
    albumscatalog.deleteAlbumById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Error: That album document does not exist' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Error: Failed to delete album document' });
        });
});





app.put('/log/:_id', (req, res) => {
    albumscatalog.updateAlbum(
        req.params._id, 
        req.body.artist, 
        req.body.name, 
        req.body.released, 
        req.body.genre,
        req.body.listens,
        req.body.lastlisten
    )
    .then(album => {
        res.json(album);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Error: Failed to update album document' });
    });
});





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});