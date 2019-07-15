# The LIRI-NODE-APP is a command line node app that takes in parameters, and returns data.
=============================================================================================
>  ## WHAT EACH COMMAND WILL DO:

`node liri.js concert-this`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Artist/band name
- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "Day, date, and time")

![concert](https://github.com/cleve716/liri-node-app/blob/master/images/concert_this.gif)

`node liri.js spotify-this-song '<song name here>`

This will show the following information about the song in your terminal/bash window:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
- If no song is provided then the program will default to "Fish Heads" by Barnes and Barnes.

![SONG](https://github.com/cleve716/liri-node-app/blob/master/images/spotify_this.gif)