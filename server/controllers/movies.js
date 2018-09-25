
var mongoose = require('mongoose');
require("../models/movie.js");
var Movie = mongoose.model('Movie');
var Review = mongoose.model("Review");

module.exports = {
    addMovie: function(req, res){
            var errors = {};
            console.log("Req . body",req.body);
            title={};
            name ={};
            stars ={};
            review= {};
            if(req.body.title.length< 3){
                title.message= "Title of the movie should be atleast 3 characters";
            }
            if(req.body.name.length< 3){
                name.message= "Name should be atleast 3 characters";
            }
            if(req.body.stars == 0 ){
                stars.message = "Please rate";

            }
            if(req.body.review.length < 3){
                review.message = "Review should be atleast 3 characters";
            }
            errors = {title : title, name: name, stars : stars, review: review};

            if(title.message || name.message || stars.message || review.message){
                console.log("Errors before Json", errors);
                res.json({message: "custom", data : errors});
                return;
            }

            Review.create(req.body, function(err,review){

                if (err){
                    console.log("Errors",err);

                    res.json({message :"Error", data : err});
                } else {
                    Movie.create({title: req.body.title}, function(err, movie) {

                        if(err){
                            res.json({message :"Error", data : err})
                        }
                        else{
                            Movie.update({_id: movie._id}, {$push: {reviews: req.body}},{runValidators: true}, function(err, data){

                                if(err){
                                    res.json({message :"Error", data : err});}
                                else{
                                    res.json({message :"Success", data : data})
                                }
                            })
                        }
                    })

                }
            });

    },
    getAllMovies: function(req, res){
        Movie.find({}, function(err,data){
            if(err){
                res.json({message :"Error", data : err})
            } else {
                res.json({message :"Success", data : data})
            }
        })
    },
    getOneMovie: function(req,res){
        Movie.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json({message :"Error", data : err})
            }else{
                res.json({message :"Success", data : data})
            }
        })
    },


    deleteMovie: function(req, res) {

        Movie.remove({_id: req.params.id}, function(err,data) {
            if(err) {
                return res.json({message :"Error", data : err});
            }
            else {
                return res.json({message:"Success", data: data})
            }
        })
    },

    newReview: function(req, res) {
        console.log("in newReview");

                Review.create(req.body, function(err, review){
                    console.log("creating review")
                    if (err){
                        res.json({message :"Error", data : err})
                    } else {
                        console.log("req.body", req.body);
                        Movie.update({_id: req.params.id}, {$push: {reviews: req.body}},{runValidators: true}, function(err, data){

                            if(err){
                                res.json({message :"Error", data : err});
                            }else{
                                console.log("adding review to Movie")
                                res.json({message:"Success", data: data});
                            }
                        });
                    }
                });
            }



}
