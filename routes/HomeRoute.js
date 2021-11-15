const HomeRouter = require("express").Router();

HomeRouter.get("/", (req, res) => {
	console.log(req.db);
	res.json({
		ok: true,
	});
});

module.exports = HomeRouter;