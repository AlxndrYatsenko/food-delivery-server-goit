const startServer = require("./src/server");
const connectToDB = require("./src/models/modules/connect-db");
const { port, databaseUrl } = require("./config");

startServer(port);
connectToDB(databaseUrl);
