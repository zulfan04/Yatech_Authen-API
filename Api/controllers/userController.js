const { User } = require("../models");

class UserController {
	static showAllUser = async (req, res, next) => {
		try {
			const data = await User.findAll({
				attributes: ["id", "username", "email"],
				order: [["id", "ASC"]],
			});

			if (data) {
				res.status(200).json(data);
			} else {
				throw { name: "UserNotFound" };
			}
		} catch (err) {
			next(err);
		}
	};
}
module.exports = UserController;
