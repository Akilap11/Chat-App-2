const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/index');

const connectDB = require('./config/connectDB');

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    Credentials: true 
}
));

app.use(express.json())

const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.json({ message: 'Server running at' +PORT });
})

//API endpoints

app.use('/api', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`MongoDB Server is running on port ${PORT}`);
    })
})