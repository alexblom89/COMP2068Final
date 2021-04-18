/* The Artist Model: 50 points (with potential to earn 75 points) */
// Step 1 (10 points): Import the required library to create a model

// Step 2 (25 points): Correct the following schema:
// firstName and lastName are required.
// All attributes are strings
const ArtistSchema = ({
  firstName: {},
  lastName: {},
  band: {}
}, {
  timestamps: true
});

// !!! BONUS (25 points): Add an instance method to retrieve all songs for an artist
// NOTE! Requires the controller part as well to get the marks!


// Step 3 (15 points): Export the model