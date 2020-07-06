const express = require('express');

const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.urlencoded({
    extend: false
}));

app.use(express.json());

app.post('/email', (req, res) => {
    res.json({message: 'Message recieved.'})
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ContactPage.js'));
})


app.listen(PORT, () => {
    console.log('Server is starting on PORT: ', PORT);
    
});