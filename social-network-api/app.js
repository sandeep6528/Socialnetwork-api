const express = require('express');
const { initModels } = require('./models.js');
const { initUsers } = require('./users.js');
const { initThoughts } = require('./thoughts.js');

const port = 3000;
const app = express();
app.use(express.json());

async function initApp() {

    await initModels();

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}

initApp();
initUsers(app);
initThoughts(app);
