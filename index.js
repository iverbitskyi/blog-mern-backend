import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

// підключення до бази даних
mongoose
    .connect('mongodb+srv://admin:wwwwww@cluster0.wvb6d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);
    
    // шифрування, в подальшому буду робити авторизацію
    if (req.body.email === 'test@gmail.com') {
        const token = jwt.sign(
            {
                email: req.body.email,
                fullname: 'Вася',
            },
            'secret123',
        );
    }

    res.json({
        success: true,
        token,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});