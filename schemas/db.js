const { MongoClient } = require("salvage.db");
const db = new MongoClient({
  mongoURI: require("../data/config.json").mongo,
  schema: {
    name: "minigamer",
  },
});
module.exports = db;