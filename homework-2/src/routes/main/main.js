const mainRoute = (req, res) => {
  // console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello world!!!</h1>");
  res.end();
};

module.exports = mainRoute;