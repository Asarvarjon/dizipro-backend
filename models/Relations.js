module.exports = async function (db) {
	await db.countries.hasMany(db.users, {
		foreignKey: {
			name: "country_id",
			allowNull: false,
		},
	});

	await db.users.belongsTo(db.countries, {
		foreignKey: {
			name: "country_id",
			allowNull: false,
		},
	});
};