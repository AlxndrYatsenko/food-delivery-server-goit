const dbUser = "admin";
const dbPassword = "3vfxNTVHhA6jwWbe";

module.exports = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-upqc8.gcp.mongodb.net/test?retryWrites=true`
};
