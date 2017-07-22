var mongoose = require('mongoose');

module.exports = function(app){

  var controller = {};

  var model = app.models.city;

  controller.getItens = function(req, res){
    model.find().exec()
      .then(
        function(itens){
          res.json(itens);
          console.log(itens);
        },
        function(err){
          res.status(500).json(err);
          console.log(err);
        }
      );
  };

  controller.save = function(req, res){

    var param = {
        'description':req.body.description
    };

    param._id = new mongoose.Types.ObjectId;
    var item = new model(param);

    item.save(function (error){
      if(error){
        console.log(error);
      }
    });

  };


  return controller;
};
