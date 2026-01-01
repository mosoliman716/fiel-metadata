import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";

dotenv.config();
const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
	if (!req.file) {
		return res.status(400).json({ error: "Please upload a file" });
	}

	res.status(200).json({
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Your app is listening on port " + port);
});
