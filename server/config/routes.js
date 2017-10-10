var rabbits = require('../controllers/rabbits.js');

module.exports = function(app) {
  //**** 2. create routes ********
  app.get('/', function(req,res) {
    rabbits.index(req,res)
  });
  app.post('/rabbit/new', function (req, res){
    rabbits.create_new(req,res)
  });

  app.get('/rabbits', function(request, res) {
    rabbits.rabbit_form(request, res)
  });

  // route to process new Rabbit form data:
  app.post('/rabbits', function (req, res){
    rabbits.rabbit_post_info(req, res)
  });

  //render show one specific rabbit form
  app.get('/rabbit/:id', function(req, res) {
    rabbits.show_rabbit(req, res)
  });

  //Delete
  app.get('/rabbit/delete/:id', function(req, res) {
    rabbits.delete(req, res)
  });

  //Edit Rabbit!!!
  app.get('/rabbit/edit/:id', function(req, res) {
    rabbits.edit(req, res)
  });

  // UPDATE and post rabbit info!!!
  app.post('/rabbit/:id', function (req, res){
    rabbits.update(req, res)
  });


}
