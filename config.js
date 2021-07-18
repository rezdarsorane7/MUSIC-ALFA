module.exports = {
  Admins: ["", ""], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "=", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/XpuNszK", //Support Server Link
  Token: process.env.Token || "NzU1ODQ5OTQ1Njg0MjQ2NTc5.X2JSHg.HUzw8GBhC7hjzFHYSBEDCO4A7J4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "755849945684246579", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "vPPS9NQU3txIxBrNnpMX8_tOhxlLOqHx", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/837917425219403836/866146803229392926/20210718_053728.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "755849945684246579", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "vPPS9NQU3txIxBrNnpMX8_tOhxlLOqHx", //Spotify Client Secret
  },
};
