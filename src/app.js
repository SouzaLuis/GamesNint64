const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const conect = require('./models/index');
const gamesRouter = require('./routes/games');


const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
conect();

app.get('/', (req, res)=>{
 return res.json({message:"API OK!"});   
});

app.use('/games', gamesRouter);

app.listen(3000, () => {console.log('Api running on port 3000');
});