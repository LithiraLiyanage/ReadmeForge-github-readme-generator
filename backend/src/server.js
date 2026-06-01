require("dotenv").config();
const app = require("./app");
const db = require("./config/db");
const seed = require("./services/templateSeedService");

const PORT = process.env.PORT || 5000;

(async () => {
	try {
		if (!process.env.SKIP_DB) {
			await db();
			await seed();
		} else {
			console.log('SKIP_DB is set — starting server without MongoDB connection or seeding');
		}

		app.listen(PORT, () => console.log(`ReadmeForge API running on port ${PORT}`));
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
})();
