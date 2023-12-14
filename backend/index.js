import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
//option1: Allow All origins with default of cors(*)
app.use(cors());


//Option 2: Allow custom origins ---- by usinng cors like an object

// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeader: ['Content-Type'],
//     })
// );



//get to fetch data from dtabase
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack');
});

app.use('/books',booksRoute);

//Route for Deleting a book by its Id  
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });