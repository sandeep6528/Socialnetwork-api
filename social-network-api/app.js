const express = require('express');
const { initModels } = require('./models.js');

const port = 3000;
const app = express();

async function initApp() {

    await initModels();

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}

initApp();
