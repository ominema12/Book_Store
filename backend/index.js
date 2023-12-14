
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//get to fetch data from dtabase
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack');
});

//Route for Save a new Book
//post to give to database
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title || !request.body.author || !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required feilds: title,author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.PublishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//Route for Get All books from Database
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message });
    }
});

//Route for Get All books from Database by its id
app.get('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const book = await Book.findById(id);

        return response.status(200).json(book);
    }

    catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message });
    }
});

 //Route to upadate a book
 app.put('/books/:id',async(request,response)=> {
    try{
        if (
            !request.body.title || 
            !request.body.author || 
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required feilds: title,author, publishYear',
            });
        }

        const {id}=request.params;
        const result= await Book.findByIdAndUpdate(id,request.body);
    
        if(!request)
    }
    catch(error){

    }
});

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