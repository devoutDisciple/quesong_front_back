const userController = require("./userController");
const router = (app) => {
	app.use("/user", userController);
};
module.exports = router;
