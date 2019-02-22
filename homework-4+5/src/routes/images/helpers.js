const fs = require("fs");

const copy = (oldPath, newPath, callback) => {
  var readStream = fs.createReadStream(oldPath);
  var writeStream = fs.createWriteStream(newPath);

  readStream.on("error", callback);
  writeStream.on("error", callback);

  readStream.on("close", function() {
    fs.unlink(oldPath, callback);
  });

  readStream.pipe(writeStream);
};

module.exports = { copy };
