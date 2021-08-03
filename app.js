const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const productRoutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoutes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/product',productRoutes)
app.use('/api/user',userRoutes)

app.all('*', (req, res, next) => {
    return error;
  });
app.listen(config.port,()=>console.log('APP is running in port'+config.port))