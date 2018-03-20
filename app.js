'use strict';
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  var option = {

      swaggerUi:"/docs",//swagger ui web page
      apiDocs:"/swagger"//api document in json format
  };

    app.use(SwaggerUi(swaggerExpress.runner.swagger, option));
  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});
