/* The Artists Controller: 160 points */

// Step 1 (10 points): Require the correct model.
// NOTE: Watch your letter case! The below code makes assumptions.

// Step 2 (50 points total):
exports.index = async (request, response, next) => {
  try {
    // a) (30 points): Correct the following line to fetch all the songs
    // (with the artist populated in the set).
    const songs = [];

    response.status(200).json(songs);
  } catch (error) {
    next(error);
  }
}; // b) (20 points): Endpoint works

// Step 3 (40 points total):
exports.show = async (request, response, next) => {
  try {
    const { id } = request.params;

    // a) (20 points): Fetch the requested song, with the artist populated
    // as part of the returned value
    const song = null;

    response.status(200).json(song);
  } catch (error) {
    next(error);
  }
}; // b) (20 points): Endpoint works

/*
  NOTE: The below actions are missing the async/await logic.
  Correct the following 3 actions.
*/
// Step 4 (20 points total):
exports.create = (request, response, next) => {
  try {
    const {
      title,
      length,
      year,
      genre,
      artist
    } = request.body;

    const song = Song.create({
      title,
      length,
      year,
      genre,
      artist
    });

    response.status(200).json({
      message: "Song was created successfully",
      status: "success",
      song
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 5 (20 points total):
exports.update = (request, response, next) => {
  try {
    const {
      id,
      title,
      length,
      year,
      genre,
      artist
    } = request.body;

    Song.findOneAndUpdate({ _id: id }, {
      id,
      title,
      length,
      year,
      genre,
      artist
    });

    const song = Song.findById(id);

    response.status(200).json({
      message: "Song was updated successfully",
      status: "success",
      song
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 6 (20 points total):
exports.destroy = (request, response, next) => {
  try {
    const { id } = request.body;

    Song.findOneAndDelete({ _id: id });

    response.status(200).json({
      message: "Song was deleted successfully",
      status: "success"
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works
