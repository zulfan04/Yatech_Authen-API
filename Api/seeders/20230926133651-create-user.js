"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const password = await bcrypt.hash("password", 10);
		await queryInterface.bulkInsert("Users", [
			{
				username: "user01",
				email: "user01@gmail.com",
				password: password,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "user02",
				email: "user02@gmail.com",
				password: password,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "user03",
				email: "user03@gmail.com",
				password: password,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
