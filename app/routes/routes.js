module.exports = function(app){

  var controller = app.controllers.citycontroller;

  app.route('/save')
    .post(controller.save);

  app.route('/getitens')
    .get(controller.getItens);

}
