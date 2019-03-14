const logout = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Logout success</h1>");
  res.end();
};

module.exports = logout;
