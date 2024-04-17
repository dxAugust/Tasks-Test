import express from 'express';
<<<<<<< HEAD
import path from 'path';
=======
import path from 'node:path';
>>>>>>> 88b1c8094f98f9bdec1a362aefcf2e89d7c89f79
 
const app: express.Application = express();
const port: number = 8080;

const frontendBuildPath = path.join("..", "..", "gf-frontend", "dist");

app.get('/', (request, response) => {
    response.sendFile(path.join(frontendBuildPath, "index.html"));
});

app.listen(port, () => {
    console.log('Server is running on port');
});