const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

// Middleware
app.use(bodyParser.json());

// Secret key for JWT (should be stored securely)
const secretKey = "your-secret-key";

// Dummy user data (replace with a database)
const users = [
	{
		id: 1,
		username: "user1",
		password: "$2b$10$1/Bbdg/LvzGVyPZ0NTYlBuJEx0u.6czRpf56NT..2KQBnsx7NNZ7a",
	}, // Password: password1
];

// Authentication route
app.post("/login", (req, res) => {
	const { username, password } = req.body;

	// Find the user by username (replace with a database query)
	const user = users.find((u) => u.username === username);

	// If the user doesn't exist or the password is incorrect, return an error
	if (!user || !bcrypt.compareSync(password, user.password)) {
		return res.status(401).json({ message: "Authentication failed" });
	}

	// Generate a JWT token
	const token = jwt.sign(
		{ userId: user.id, username: user.username },
		secretKey,
		{ expiresIn: "1h" }
	);

	res.json({ token });
});

// Protected route (requires a valid JWT)
app.get("/protected", (req, res) => {
	// The user's JWT token is available in the request headers
	const token = req.headers.authorization?.replace("Bearer ", "");

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	// Verify the token
	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: "Invalid token" });
		}

		// Token is valid; you can access decoded data (e.g., decoded.userId)
		res.json({
			message: "Protected resource accessed",
			userId: decoded.userId,
		});
	});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
