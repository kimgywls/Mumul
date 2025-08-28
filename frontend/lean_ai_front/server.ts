// server.ts
import dotenv from 'dotenv';
import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const port = process.env.NEXT_FRONT_PORT;
console.log('ENV PORT:', process.env.NEXT_FRONT_PORT);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./certificates/localhost-key.pem'),
    cert: fs.readFileSync('./certificates/localhost.pem')
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url!, true);
        handle(req, res, parsedUrl);
    }).listen(port, () => {
        console.log(`> Ready on https://localhost:${port}`);
    });
}); 