var Movie = require('./../controllers/movies.js')
module.exports = function(app){
    app.get('/api/movies', Movie.getAllMovies)
    app.post('/api/movie/add', Movie.addMovie)
    app.get('/api/movie/:id', Movie.getOneMovie)
    app.put('/api/movie/:id', Movie.newReview)
    app.delete("/api/movie/:id", Movie.deleteMovie);
    app.post("/api/review/:id", Movie.newReview);
}