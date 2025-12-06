const fs = require("fs");
exports.handler = async () => {
  const data = fs.readFileSync("players.json", "utf8");
  return { statusCode: 200, body: data };
};
