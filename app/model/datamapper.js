const client = require("./dbclient");

const dataMapper = {

  async getAllVideo(){
    const query = {
      text: `SELECT * FROM "video";`
    };
    const allVideo = await client.query(query);
    return allVideo.rows;
  },

  async getVideoBYId(video_id){
    const query = {
      text: `SELECT * FROM "video" WHERE id = $1;`,
      values: [video_id]
    };
    const video = await client.query(query);
    return video.rows[0];
  },

  async getAllChatMessages() {
      const query = {
        text: `SELECT * FROM "chat";`
    };
    const allChatMessages = await client.query(query);
    return allChatMessages;
  },

  async postChat(chat) {
    const query = {
      text: `INSERT INTO "chat" (user_id, content) VALUES($1, $2);`,
      values: [chat.userid, chat.content]
    };
    const post = await client.query(query);
    return post;
  },

  async createUser(user) {
    console.log(user);
    const query = {
      text: `INSERT INTO "user" (email, username, password) VALUES($1, $2, $3);`,
      values: [user.email, user.username, user.password]
    };
    const newUser = await client.query(query);
    return newUser;
  },

  async loginUser(user) {
    const query = {
      text: `SELECT username FROM "user" WHERE email = $1 AND password = $2;`,
      values: [user.email, user.password]
    };
    const userInDB = await client.query(query);
    return userInDB;
  }



}


module.exports = dataMapper;