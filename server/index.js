const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    Credentials: true 
}
    
));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    response.json({ message: 'Server running at' +PORT });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})