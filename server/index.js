const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');


const app = express();
// TODO: remove bodyParser for the express
app.use(bodyParser.json());


app.use(cors());

// TODO re-model backend to MVC
// TODO route to user creation
app.use('/', router);

//TODO: move PORT to .env file 
const PORT = 3001;

//TODO: Refactor to Atlas

//TODO:link to db file

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});