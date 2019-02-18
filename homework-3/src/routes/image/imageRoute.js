const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { copy } = require("./helpers");

const TEMP_IMAGE_FOLDER = path.join(__dirname, "../../", "assets");
const USER_IMAGE_FOLDER = path.join(__dirname, "../..", "db", "users");

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, TEMP_IMAGE_FOLDER);
  },
  filename: (req, file, next) => {
    next(null, file.originalname);
  }
});
const upload = multer({ storage });

const moveImage = (fileObject, userId) => {
  const userImageFolderName = "user-" + userId;
  const userImagePath = path.join(USER_IMAGE_FOLDER, userImageFolderName);

  if (!fs.existsSync(userImagePath)) {
    fs.mkdirSync(userImagePath);
  }

  const tempFilePath = path.join(TEMP_IMAGE_FOLDER, fileObject.originalname);
  const newFilePath = path.join(userImagePath, fileObject.originalname);

  return Promise.resolve(
    copy(tempFilePath, newFilePath, error => {
      if (error) console.log(error);
    })
  )
    .then(() => userImageFolderName)
    .catch(error => console.log(error));
};

const imageRoute = (req, res) => {
  const fileObject = req.file;
  const userId = req.body.userId;

  moveImage(fileObject, userId).then(userImageFolderName => {
    res.json({ status: "was saved in folder: " + userImageFolderName });
  });
};

module.exports = () => [upload.single("file"), imageRoute];
