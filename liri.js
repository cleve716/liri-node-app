require("dotenv").config(); // requirements for package.json
var keys = require("./keys.js"); // keys, read-files, dotenv, etc
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var command = process.argv[2]; // variables for node arguments
var searchWords = process.argv.slice(3).join(" ");



function getMovie(movie) { // function for OMDB

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
            else { // default to the best movie ever made, if no movie is selected
                console.log("since you didn't make a choice, the best movie of all time is... drum roll please... : ")
                getMovie("Lawrence of Arabia");
            }
        });
}

function getBand(band) { // function for concerts

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
            else { // response if band is not touring
                console.log("Looks like " + band + " aren't on the road right now... :-(");

            }
        });
}

function getSong(song) {


    if (!song) { //if no song is selected, "Fish Heads" by Barnes and Barnes is chosen
        song = "Fish Heads Barnes and Barnes";
        console.log("Thank you, Dr. Demento!");
    };


    spotify.search( // standard spotify search syntax
        {
            type: 'track',
            query: song
        },
        function (err, data) {
            if (err) {
                console.log("Error details: " + err);
                return;



            }
            else {

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
        }
    );    
}

function getText(){ // read-file syntax
	fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
        }
        console.log(data);
       var dataArr = data.split(',');
       switchCase(dataArr[0], dataArr[1]); // pulls the switch case function and places the dataArr 
       	});                                // elements into the argument
}


function switchCase (pickCommand, searchData){ //switch case parameters
switch (pickCommand) {
    case "movie-this":
        getMovie(searchData);

        break;
    case "concert-this":
        getBand(searchData);

        break;
    case "spotify-this-song":
        getSong(searchData);


        break;
    case "do-what-it-says": // logic for reading random.txt values is above
        getText();

        break;

    default:
        return console.log("not a valid command");
}
}
function run (argCommand, argSearch){ // the run function creates two placeholders
switchCase(argCommand, argSearch) // which are then placed into the switchCase function

}
run(command, searchWords); //running the function allows the values of argv[2] and argv[3] from the node.js 
                            // command line to be utilized, if the getText command is not used