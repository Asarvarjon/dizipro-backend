const nodemailer = require("nodemailer");

async function sendEmail(mailTo, html) {
	const transport = nodemailer.createTransport({
		auth: {
			user: process.env.MAIL_ADDRESS,
			pass: process.env.MAIL_PASSWORD,
		},
		host: "smtp.mail.ru",
		port: 465,
	});
 

	let info = await transport.sendMail({
		from: `"Dizipro" <${process.env.MAIL_ADDRESS}>`, // sender address
		to: mailTo, // list of receivers
		subject: "Confirm recovery password ✔", // Subject line
		html, // html body
	});
 

	return info;
}

module.exports = sendEmail;