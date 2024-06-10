import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Items() {
  const location = useLocation();
  const { todos } = location.state || { todos: [] };
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all details from the backend
    fetch('https://mentor-mail-backend.onrender.com/get-details')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        if (data.total && data.total.length > 0) {
          // Sort documents based on _id (which is an ObjectId) to find the most recent one
          const sortedDetails = data.total.sort((a, b) => {
            const dateA = new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
            const dateB = new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
            return dateB - dateA;
          });
          const lastEmail = sortedDetails[0].username; // Assuming 'username' field contains email
          setEmail(lastEmail);
        } else {
          console.log('No details found');
        }
      })
      .catch(error => {
        console.error('Error fetching details:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <>
    <div><h1 className='mentor'>MENTOR MAIL</h1></div>
    <div className="todo-app">
      <h1 className='co'><b>Courses and Internships</b></h1>
      <p className='welcome'><b>Welcome {email}!</b></p>
      {todos.length > 0 ? (
        <ul className='unl'>
          {todos.map(todo => (
            <li className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
              <Link
                to="/content"
                state={{ email: email, todoText: todo.text }}
              >
                <b>{todo.text}</b>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </div>
    </>
  );
}

export default Items;
