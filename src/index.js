require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();
app.use('/assets', express.static('public/images'));

//app.method(path, handler)
app.use(middlewareLogRequest.logRequest);
app.use(express.json());

app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

// app.get('/', (req, res) => {
//     res.send('Welcome to API express-mysql')
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})