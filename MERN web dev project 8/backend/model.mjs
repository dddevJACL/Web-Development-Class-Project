
import mongoose from 'mongoose';
import 'dotenv/config';


mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;


db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'ERROR CODE 500: Failed to connect to server MONGO PASSCODE DELETED FROM PUBLIC REPO FOR PRIVACY AND SECURITY.' });
    } else  {
        console.log('Successful connection to to MongoDB Music album collection using Mongoose.');
    }
});




const albumSchema = mongoose.Schema({
	artist:     { type: String, required: true },
	name:       { type: String, required: true },
	released:   { type: Date,   required: true },
    genre:      { type: String, required: true },
    listens:    { type: Number, required: true, min: 0 },
    lastlisten: { type: Date,   required: true, default: Date.now }
});

// 

const Album = mongoose.model('Album', albumSchema);




const createAlbum = async (artist, name, released, genre, listens, lastlisten) => {
    const album = new Album({ 
        artist:     artist, 
        name:       name, 
        released:   released, 
        genre:      genre,
        listens:    listens,
        lastlisten: lastlisten
    });
    return album.save();
}



const findAlbum = async () => {
    const query = Album.find();
    return query.exec();
}



const retrieveAlbumByID = async (id) => {
    const query = Album.findById(id);
    return query.exec();
}




const deleteAlbumById = async (id) => {
    const result = await Album.deleteOne({id: id});
    return result.deletedCount;
};





const updateAlbum = async (id, artist, name, released, genre, listens, lastlisten) => {
    const result = await Album.replaceOne({id: id }, {
        artist:     artist, 
        name:       name, 
        released:   released, 
        genre:      genre,
        listens:    listens,
        lastlisten: lastlisten
    });
    return { 
        id:         id, 
        artist:     artist, 
        name:       name, 
        released:   released, 
        genre:      genre,
        listens:    listens,
        lastlisten: lastlisten
    }
}




export { createAlbum, findAlbum, retrieveAlbumByID, deleteAlbumById, updateAlbum }