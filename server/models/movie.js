
const mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({

    name: {type: String, required: [true, "Name is required"], minlength: [3, "name must be 3 characters or longer."]},
    stars: {type: Number, required: [true, "Please Rate"] },
    review: {type: String, required: [true, "Review is required"], minlength: [3, "Review must be  atleast 3 characters "]},
    },{timestamps:true});



    mongoose.model('Review', ReviewSchema);


var MoviesSchema = new mongoose.Schema({

title: {type: String, required: [true, "Movie title is required"], minlength: [3,  "Movie must have a title of atleast 3 characters" ]},

reviews: [ReviewSchema]

},{timestamps:true});



mongoose.model('Movie', MoviesSchema);


