const errorMessages = {
	ErrorNotFound: {
		statusCode: 404,
		message: "Error Not Found",
	},
	UserNotFound: {
		statusCode: 404,
		message: "User Not Found",
	},
	WrongEmail: {
		statusCode: 404,
		message: "Wrong Email",
	},
	WrongPassword: {
		statusCode: 404,
		message: "Wrong Password",
	},
};

const errorHandler = (err, req, res, next) => {
	console.log(err);
	const error = errorMessages[err.name];
	if (error) {
		console.log(error.message);
		res.status(error.statusCode).json({
			message: error.message,
		});
	} else {
		res.status(500).json({
			message: "Internal Server Error ini error handler",
		});
	}
};

module.exports = errorHandler;
