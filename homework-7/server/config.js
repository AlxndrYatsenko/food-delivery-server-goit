const dbUser = "admin";
const dbPassword = "3vfxNTVHhA6jwWbe";
const secretKey = "super-key";

module.exports = {
	port: 8080,
	dbUser,
	dbPassword,
	databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-upqc8.gcp.mongodb.net/test?retryWrites=true`,
	secretKey,
};
