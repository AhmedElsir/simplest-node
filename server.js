const express = require('express');
const app = express();

const routers = require('./routes');  
routers.setup(app);



// app.use('/api', router);

app.listen(8080);
console.log('server listen on port 8080');
