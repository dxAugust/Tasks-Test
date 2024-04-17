import express from 'express';
import path from 'path';
 
const app: express.Application = express();
const port: number = 8080;

const frontendBuildPath = path.join("..", "..", "gf-frontend", "dist");

app.get('/', (request, response) => {
    response.sendFile(path.join(frontendBuildPath, "index.html"));
});

app.listen(port, () => {
    console.log('Server is running on port');
});