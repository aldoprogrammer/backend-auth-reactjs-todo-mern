const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const user = require('./models/User')
const User = require("./models/User")
const cors = require('cors')

const app = express();
app.use(cookieParser())
app.use(bodyParser.json({extended: true}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

const port = 4000;

app.get('/', (req, res) => {
    const body = 'Hello, World!';
    res.send(body);
});

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        console.log("User created:", user);

        res.status(201).send("User created successfully");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
});

mongoose.connect('mongodb+srv://aldobesma:NZNUAulUktsDMlD1@cluster0.ipgxx38.mongodb.net/auth', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));
