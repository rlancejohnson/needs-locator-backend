import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import path from 'path';

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.get('/api/v1/', (req, res) => {
    res.json({ success: true });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/`
    )
);