const fs = require("fs");

exports.handler = async (event) => {
  let players = JSON.parse(fs.readFileSync("players.json", "utf8"));

  if (event.httpMethod === "POST") {
    const player = JSON.parse(event.body);
    const index = players.findIndex(p => p.name === player.name);
    if (index >= 0) players[index] = player;
    else players.push(player);
  }

  if (event.httpMethod === "DELETE") {
    const body = JSON.parse(event.body);
    players = players.filter(p => p.name !== body.name);
  }

  fs.writeFileSync("players.json", JSON.stringify(players, null, 2));

  return { statusCode: 200, body: "OK" };
};
