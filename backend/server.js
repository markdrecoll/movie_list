const mongoose = require('mongoose');
const username = "mark001";
const password = "password007";
const cluster = "cluster0.z2ex8";
const dbname = "movietable";

// connect to remote mongodb
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

// schema for movies
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    releaseDate: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});
const Movie = mongoose.model('movies', MovieSchema);
Movie.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
response.send("App is Working");
});

app.post("/saveMovie", async (request, response) => {
    try {
        const movie = new Movie(request.body);
        let result = await movie.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            response.send(request.body);
            console.log(result);
        } else {
            console.log("Cannot save movie.");
        }

    } catch (e) {
        response.send("An error has occured.");
    }
});

app.get("/retrieveMovies", async (request, response) => {
        Movie.find({}).then(function (movies){
            response.send(movies);
            console.log("test");
            console.log(movies);
        })
});

app.listen(5000);