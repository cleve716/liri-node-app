require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var command = process.argv[2];
var searchWords = process.argv.slice(3).join(" ");



function getMovie(movie){

axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year released: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Produced in: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });
}




switch(command){
case "movie-this":
getMovie(searchWords);

break;
case "concert-this":


break;
case "spotify-this-song":


break;
case "do what it says":


break;

default:
return console.log("not a valid command");
}


