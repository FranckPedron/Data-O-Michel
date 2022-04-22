const dataMapper = require('../model/datamapper.js');
const APIError = require('../middleware/APIError');
const controller = {
  /**
   * Render the home page, passing all compulsory datas
   * @param {req}
   * @param {res}
   * @returns {EJS page}
   */
  async homePage(req,res) {
    // On récupère les objets salons (dans le cas dune home avec plusieurs salons)
    res.render('homepage', {});
  },
   /**
   * Render the subscribe page, passing all compulsory datas
   * @param {req}
   * @param {res}
   * @returns {EJS page}
   */
  subscribePage(req,res) {
    // On récupère tous les éléments nécessaires à la construction de la vue
    res.render('subscribe', {});
  },
  /**
   * POST a new user to the database
   * @param {req}
   * @param {res}
   * @returns {HTML Redirection}
   */
  async createUser(req,res) {
    // User contient email / username / password
    const user = req.body.user;
    const result = await dataMapper.createUser(user);
    if(!result.rowCount){
      throw new APIError ("Impossible d'enregistrer l'utilisateur en base");
    };
    res.redirect('/login');
  },
  /**
   * Render the login page, passing all compulsory datas
   * @param {req}
   * @param {res}
   * @returns {EJS page}
   */
  loginPage(req,res) {
    // On récupère tous les éléments nécessaires à la construction de la vue
    res.render('login', {
    });
  },
  /**
   * Login, checking with users stored in database
   * @param {req}
   * @param {res}
   * @returns {HTML Redirection}
   */
  async logUser(req,res) {
    const user = req.body.user;
    const result = await dataMapper.loginUser(user);
    if(!result.rowCount){
      throw new APIError ("Les credentials sont erronés.");
    };
    res.redirect('/');
  },
  /**
   * Render the watch page, passing all compulsory datas
   * @param {req}
   * @param {res}
   * @returns {EJS page}
   */
  async watchPage(req,res) {
    // On récupère les vidéos pour les afficher sur la home
    const allVideos = await dataMapper.getAllVideo();
    // On récupère tous les messages du chat de la vidéo
    const allChatMessages = await dataMapper.getAllChatMessages();
    res.render('watch', {
      allVideos, allChatMessages
    });
  },
  /**
   * Post a new message in chat
   * @param {req}
   * @param {res}
   * @returns {HTML Redirection}
   */
  async postMessage(req,res) {
    // un obket message contien userid - content
    const message = req.body.message;
    await dataMapper.postChat(message);
    //Redirection provisoire, ne prend pas en compte le websocket
    res.redirect('/watch');
  },
};

module.exports = controller;