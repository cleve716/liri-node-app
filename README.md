# The LIRI-NODE-APP is a command line node app that takes in parameters, and returns data.

## WHAT EACH COMMAND WILL DO:


> `node liri.js concert-this <artist/band name here> `

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Artist/band name
- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "Day, date, and time")

![Concert](https://github.com/cleve716/liri-node-app/blob/master/images/concert_this.gif)

<br/>
> `node liri.js spotify-this-song <song name here>`

This will show the following information about the song in your terminal/bash window:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

 **If no song is provided then the program will default to "Fish Heads" by Barnes and Barnes**.

![Song](https://github.com/cleve716/liri-node-app/blob/master/images/spotify_this.gif)



<br/>
> `node liri.js movie-this <movie name here>`

This will output the following information from **imdb.com** to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

**If the user doesn't type a movie in, the program will output data for the movie 'Lawrence of Arabia'.**

![Movie](https://github.com/cleve716/liri-node-app/blob/master/images/movie_this.gif)

<br/>
> `node liri.js do-what-it says`

*Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands:

    *It will run `spotify-this-song` for the song "Do the Locomotion," as follows the text in random.txt.


