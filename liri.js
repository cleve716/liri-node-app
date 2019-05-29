require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var command = process.argv[2];
var searchWords = process.argv.slice(3).join(" ");



function getMovie(movie) {

    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy").then(
        function (response) {

            if (response.data.Title != undefined) {
                console.log("Title: " + response.data.Title);
                console.log("Year released: " + response.data.Year);
                console.log("IMDB rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);

            }
            else {
                console.log("since you didn't make a choice, the best movie of all time is... drum roll please... : ")
                getMovie("Lawrence of Arabia");
            }
        });
}

function getBand(band) {

    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function (response) {

            if (response.data[0] != undefined) {

                for (var i = 0; i < response.data.length; i++) {
                    console.log();
                    console.log("Lineup: " + response.data[i].lineup);
                    console.log("Venue: " + response.data[i].venue.name);
                    console.log("City: " + response.data[i].venue.city);
                    console.log("Day, date, and time: " + moment(response.data[i].datetime).format("LLLL"));
                    console.log("__________________________________");
                }
            }
            else {
                console.log("Looks like " + band + " aren't on the road right now... :-(");

            }
        });
}

function getSong(song) {
var getTrack;
    if (song === undefined) {
        getTrack = "The Sign";
    } else{
        getTrack = song;
    }
    spotify.search(
        { 
            type: 'track',
            query: getTrack
         },
        function (err, data) {
            if (err) {
                console.log("Error: " + err);
                return;
            }

            for (var i = 0; i < data.tracks.items.length; i++) {
                console.log();
                console.log(i);
                console.log("Artist: " + data.tracks.items[i].artists[0].name);
                console.log("Song: " + data.tracks.items[i].name);
                console.log("Preview: " + data.tracks.items[i].preview_url);
                console.log("Album: " + data.tracks.items[i].album.name);
                console.log("__________________________________");
            
        
            }
        }
    );    
};




switch (command) {
    case "movie-this":
        getMovie(searchWords);

        break;
    case "concert-this":
        getBand(searchWords);

        break;
    case "spotify-this-song":
        getSong(searchWords);


        break;
    case "do what it says":


        break;

    default:
        return console.log("not a valid command");
}


