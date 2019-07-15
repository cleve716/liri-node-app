# The LIRI-NODE-APP is a command line node app that takes in parameters, and returns data.

## WHAT EACH COMMAND WILL DO:

> `node liri.js concert-this <artist/band name here> `

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Artist/band name
- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "Day, date, and time")

![concert](https://github.com/cleve716/liri-node-app/blob/master/images/concert_this.gif)


> `node liri.js spotify-this-song <song name here>`

This will show the following information about the song in your terminal/bash window:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

 **If no song is provided then the program will default to "Fish Heads" by Barnes and Barnes**.

![SONG](https://github.com/cleve716/liri-node-app/blob/master/images/spotify_this.gif)


`node liri.js movie-this <movie name here>`

This will output the following information from **imdb.com** to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

** If the user doesn't type a movie in, the program will output data for the movie 'Lawrence of Arabia'**

![SONG](https://github.com/cleve716/liri-node-app/blob/master/images/movie_this.gif)
