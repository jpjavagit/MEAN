var mongoose = require('mongoose');

module.exports = function(uri){

  mongoose.set('debug', true);

  mongoose.connect(uri);

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Conexão fechada');
      process.exit(0);
    });
  });

  mongoose.connection.on('connected', function(){
      console.log('Database online..');
  });

  mongoose.connection.on('disconnected', function(){
      console.log('Database Off-Line');
  });

  mongoose.connection.on('error', function(erro){
      console.log('Error ' + erro);
  });

}
