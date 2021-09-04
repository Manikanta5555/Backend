const express = require('express');
const mongo = require('mongoose')

const route = require('./Routes/index');

const app = express();
const port = 2020;
const host = 'localhost';
const cors = require('cors');
const nodemon = require('nodemon');

app.use(cors());
app.use(express.json());
app.use('/api',route); 
mongo.connect('mongodb+srv://Mani:Mani@cluster0.phdpx.mongodb.net/Zomato_Web?retryWrites=true&w=majority',{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(
    () =>
    {
        app.listen(port,host,() => {
            console.log(`Server running at  ${host}:${port}`);
        });
    }
).catch(
    () =>{
        document.write("Error their");
    }
)

