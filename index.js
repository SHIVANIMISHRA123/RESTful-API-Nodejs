const port = process.env.PORT || 5001
const express = require('express');
const cors = require('cors');
const connect = require('./db/connection');
const routes = require('./routes/route');
connect();
const app = express();   //it is our middleware


app.use(express.json()); 
app.use('/api',routes);
app.use(cors());
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})