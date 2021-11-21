const { checkToken } = require("../modules/jsonwebtoken");

module.exports = async function AuthMiddleware(req, res, next) {
	try {
		const token = req.headers["authorization"];

		if (!token) throw new res.error(401, "Unauthorized");

		const data = checkToken(token);

		if (!data) throw new res.error(401, "Unauthorized");

		const session = await req.db.sessions.findOne({
			where: {
				session_id: data.session_id,
			},
			include: req.db.users,
			raw: true,
		});

		if (!session) throw new res.error(401, "Unauthorized");

		req.session = session;

		next();
	} catch (error) {
		next(error);
	}
};