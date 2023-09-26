const express = require("express");
const app = express();
const port = 3001;
const errorHandler = require("./middlewares/errorhandler");
const router = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors());

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
