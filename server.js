import express from "express";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

await mongoose.connect('mongodb+srv://aldobesma:NZNUAulUktsDMlD1@cluster0.ipgxx38.mongodb.net/auth',
)
const db = mongoose.connection;
db.on('error', console.log);

const app = express();
app.use(cookieParser())
app.use(bodyParser.json({extended: true}))

const port = 4000;

app.get('/', (req, res) => {
    const body = 'Hello, World!';
    res.send(body);
});

app.post('/register', (req, res) => {
    const { email, password} = req.body;

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
