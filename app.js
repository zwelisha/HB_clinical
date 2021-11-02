const  express = require('express')
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_, res) => {
    res.send("Covid App!");
});

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});