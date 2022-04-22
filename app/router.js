const { Router } = require('express');
const controller = require('./controller/controller.js');
const router = Router();
const routerWrapper = require("./middleware/routerWrapper");
const handleError = require('./middleware/errorHandler.js');

router
  .get('/', controller.homePage)
  .get ('/subscribe', routerWrapper(controller.subscribePage))
  .post ('/subscribe', routerWrapper(controller.createUser))
  .get ('/login', routerWrapper(controller.loginPage))
  .post ('/login', routerWrapper(controller.logUser))
  .get ('/watch', routerWrapper(controller.watchPage))
  .post ('/watch', routerWrapper(controller.watchPage))
  .use(handleError);


module.exports = router;