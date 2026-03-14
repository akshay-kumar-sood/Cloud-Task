const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

// storage setup
const storage = multer.diskStorage({
destination: "uploads/",
filename: (req, file, cb) => {
cb(null, Date.now() + path.extname(file.originalname));
}
});

const upload = multer({ storage });
// upload route
app.post("/upload", upload.single("image"), (req, res) => {
res.send("Image Uploaded Successfully");
});

// server start
app.listen(3000, () => {
console.log("Server running on port 3000");
});
