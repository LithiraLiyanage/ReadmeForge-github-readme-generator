const mongoose = require("mongoose");

module.exports = async () => {
	try {
		const envUri = process.env.MONGO_URI;
		const localUri = 'mongodb://127.0.0.1:27017/readmeforge';

		// If MONGO_URI is explicitly provided, use it.
		if (envUri) {
			await mongoose.connect(envUri);
			console.log("MongoDB connected (MONGO_URI)");
			return;
		}

		// Try connecting to a local MongoDB instance first (e.g., via docker-compose)
		try {
			await mongoose.connect(localUri);
			console.log('MongoDB connected (local)');
			return;
		} catch (localErr) {
			console.log('Local MongoDB not available, falling back to in-memory');
		}

		// Fallback: start an in-memory MongoDB for development/testing
		const { MongoMemoryServer } = require('mongodb-memory-server');
		// Increase launchTimeout to allow mongod more time to start on slower machines
		const mongod = await MongoMemoryServer.create({
			instance: { dbName: 'readmeforge', launchTimeout: 120000 },
			binary: { version: '5.0.19' }
		});
		const memUri = mongod.getUri();
		await mongoose.connect(memUri);
		console.log('In-memory MongoDB started');
	} catch (err) {
		console.error('MongoDB connection error:', err);
		throw err;
	}
};
