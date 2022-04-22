const client = require("./dbclient");

const dataMapper = {

  async getAllVideo(){
    const query = {
      text: `SELECT * FROM video;`
    };
    const allVideo = await client.query(query);
    return allVideo;
  },

  async getVideoBYId(){
    const query = {
      text: `SELECT * FROM video WHERE id = $1;`,
      values: [video_id]
    };
    const video = await client.query(query);
    return video;
  },

  async getAllChat() {
      const query = {
        text: `SELECT * FROM chat;`
    };
    const allChat = await client.query(query);
    return allChat;
  },

  async postChat() {
    const query = {
      text: `INSERT INTO chat WHERE userid = $1, content = $2;`,
      values: [userid, content]
    };

  }



}


module.exports = dataMapper;