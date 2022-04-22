const dataMapper = require('../model/datamapper.js');
// tu veux de l'aide BB ? Ben il faut qu'on se mette ok sur la couche en dessous la couche ? culotte
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
    await dataMapper.createUser(user)
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
    await dataMapper.loginUser(user);
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
    res.render('watchPage', {
      allVideos
    });
  },
};

module.exports = controller;