import express from 'express';

const router = express.Router();

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
app.put('/books/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required feilds: title,author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!request) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message });
    }
});
app.delete('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!request) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message });
    }
});