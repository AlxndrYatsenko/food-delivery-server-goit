const startServer = require("./src/server");
const connectToDB = require("./src/models/modules/connect-db");
const { port, databaseUrl } = require("./config");
console.log(databaseUrl);

startServer(port);
connectToDB(databaseUrl);
