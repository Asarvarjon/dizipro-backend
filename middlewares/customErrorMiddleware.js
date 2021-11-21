const CustomError = require("../helpers/CustomError");

module.exports.customErrorMiddleware = function customErrorMiddleware(
	req,
	res,
	next
) {
	console.log( CustomError.CustomError);
	res.error = CustomError.CustomError;
	next();
};