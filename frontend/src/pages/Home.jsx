import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://loacalhost:5555/books')
      .then(response)=> {
  setLoading(response.data.data);
  setLoading(false);
   )
}
   .catch ((error) => {
  console.log(error);
}, []);
   });
return (
  <div>Home</div>
)
}

export default Home;