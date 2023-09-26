const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv");

class LoginController {
	static login = async (req, res, next) => {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({
				where: {
					email,
				},
			});

			if (!user) {
				throw { name: "UserNotFound" };
			}

			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

			res.status(201).json({ token, name: user.username });
		} catch (err) {
			next(err);
		}
	};
}

module.exports = LoginController;
