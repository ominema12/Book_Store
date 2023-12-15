import React from 'react';
import { Routes, Route } from 'react-route-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/books/create' element={ <CreateBooks />} />
      <Route path='/books/details/:id' element={ <ShowBook /> } />
      <Route path='' element={ } />
      <Route path='' element={ } />
    </Routes>
  )
}

export default App;