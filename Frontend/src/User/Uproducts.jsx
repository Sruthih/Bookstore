import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Seller/List.css';
import Unavbar from './Unavbar';

function Uproducts() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch books list from the backend
  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then((resp) => {
        setBooks(resp.data); // Assuming the response contains an array of books
      })
      .catch((error) => {
        console.error('Failed to fetch books:', error);
      });
  }, []);

  // Function to handle navigating to the order item page for a specific book
  const handleOrderClick = (bookId) => {
    navigate(`/orderitem/${bookId}`); // Navigates to the OrderItem page with the book's ID
  };

  return (
    <div>
      <Unavbar />
      <div style={{ padding: '20px' }}>
        <h2>Books Available for Order</h2>
        <div className="book-list">
          {books.map((book) => (
            <div key={book._id} className="book-item" style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <img src={item.itemImage}  alt={book.title} style={{ width: '100px', height: '150px' }} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              <button
                onClick={() => handleOrderClick(book._id)} // Pass the book's ID to the order page
                style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Uproducts;
