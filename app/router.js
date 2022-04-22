const { Router } = require('express');
const controller = require('./controller/controller.js');
const router = Router();
const routerWrapper = require("./middleware/routerWrapper");
const handleError = require('./middleware/errorHandler.js');
const security = require("./middleware/security");

router
  .get('/', controller.homePage)
  .get ('/subscribe', routerWrapper(controller.subscribePage))
  .post ('/subscribe', routerWrapper(controller.createUser))
  .get ('/login', routerWrapper(controller.loginPage))
  .post ('/login', routerWrapper(controller.logUser))
  .get ('/watch',security.check, routerWrapper(controller.watchPage))
  .post ('/watch',security.check, routerWrapper(controller.watchPage))
  .use(handleError);


module.exports = router;