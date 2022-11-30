import express from 'express';
import { createServer as createViteServer } from 'vite';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

async function createServer() {
	const app = express();

	let kit;

	try {
		if (process.env.NODE_ENV !== 'production') throw new Error();

		// @ts-ignore
		const { handler } = await import('../dist/handler.js');

		// @ts-ignore
		kit = handler;
	} catch {
		kit = (
			await createViteServer({
				server: { middlewareMode: true, watch: { ignored: '*' } },
				appType: 'custom'
			})
		).middlewares;
	}

	payload.init({
		secret: process.env.PAYLOAD_SECRET || '',
		mongoURL: process.env.PAYLOAD_MONGODB_URI || '',
		express: app
	});

	app.use(kit);

	app.listen(5173, function () {
		console.log('Server listening on 5173.');
	});
}

createServer();
