var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');
//format date
var moment = require('moment');
moment().format();

module.exports = {
  index: function(request, response) {
    Rabbit.find({}, function (err, rabbits) {
      if(err){
        console.log(err);
      }else {
        response.render('index', {rabbits_info: rabbits, moment: moment})
      }
    })
  },
  create_new: function (req, res){
    res.redirect('/rabbits')
  },
  rabbit_form: function(request, response) {
    response.render('create_rabbit')
  },
  rabbit_post_info: function (req, res){
    console.log("POST DATA ", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var rabbit = new Rabbit({name: req.body.name, age : req.body.age, color: req.body.color, cuteness_level : req.body.level, added_by: req.body.added_by});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    rabbit.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong', err);
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        //redirect the user back to the root route.
        res.redirect('/')
      }
    })
  },
  show_rabbit: function(req, response) {
    Rabbit.find({_id: req.params.id}, function (err, rabbit) {
      if(err){
        console.log(err);
      }else {
        response.render('show_rabbit', {rabbit_info: rabbit, moment: moment})
      }
    })
  },
  delete: function(req, res) {
    Rabbit.remove({_id: req.params.id}, function (err, rabbit) {
      if(err){
        console.log(err);
      }else {
        res.redirect('/')
      }
    })
  },
  edit: function(req, response) {
    Rabbit.find({_id: req.params.id}, function (err, rabbit) {
      if(err){
        console.log(err);
      }else {
        response.render('edit_rabbit', {rabbit_info: rabbit, moment: moment})
      }
    })
  },
  update:  function (req, res){
    Rabbit.findByIdAndUpdate(req.params.id, { $set: {name: req.body.name, age : req.body.age, color: req.body.color, cuteness_level : req.body.level, added_by: req.body.added_by}}, { new: true }, function (err, rabbit) {
     if (err) return handleError(err);
     res.redirect('/')
   });
  }
}
