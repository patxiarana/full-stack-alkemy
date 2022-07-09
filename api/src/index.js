const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.listen(3000);
console.log('Server on port 3000')

//middlewars
app.use(express.json());
app.use(urlencoded({extended:false}));

// routes
app.use(require('./routes/index'))

