require("dotenv").config();
//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var movieTitle = process.argv.slice(2).join(" ");

axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year released: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Produced in: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    }
);
