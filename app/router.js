const { Router } = require('express');
const controller = require('./controller/controller.js');
const router = Router();

router
  .get('/', controller.homePage)
  .get ('/subscribe', controller.subscribePage)
  .post ('/subscribe', controller.createUser)
  .get ('/login', controller.loginPage)
  .post ('/login', controller.logUser)
  .get ('/watch', controller.watchPage);

module.exports = router;