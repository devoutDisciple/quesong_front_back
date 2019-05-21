const userController = require("./userController");
const swiperController = require("./swiperController");
const router = (app) => {
	app.use("/user", userController);
	app.use("/swiper", swiperController);
};
module.exports = router;
