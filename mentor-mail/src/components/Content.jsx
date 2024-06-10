import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Content() {
  const location = useLocation();
  const { email, todoText } = location.state || {};
  const [storedEmail, setStoredEmail] = useState('');
  const [storedTodoText, setStoredTodoText] = useState('');
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email && todoText) {
      setStoredEmail(email);
      setStoredTodoText(todoText);
    }
  }, [email, todoText]);

  useEffect(() => {
    if (storedEmail && storedTodoText) {
      fetch('https://mentor-mail-backend.onrender.com/get-mail')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const matchedContents = data.total.filter(
            item => item.username === storedEmail && item.course === storedTodoText
          );
          setContents(matchedContents);
        })
        .catch(error => {
          console.error('Error fetching mail details:', error);
          setContents([{ content: 'Error fetching content' }]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [storedEmail, storedTodoText]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }
  

  return (
    <div>
      <h1 className='mentor'>Message Subject</h1>
      <div className="todo-app">
      {storedEmail ? <p className='name1'>User : {storedEmail}</p> : <p>No email found</p>}
      {storedTodoText ? <p className='name'>{storedTodoText}</p> : <p>No todo text found</p>}
      {contents.length > 0 ? (
        <ul>
          {contents.map((item, index) => (
            <li className={item.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>{item.content}</li>
          ))}
        </ul>
      ) : (
        <p>No matching content found</p>
      )}
      </div>
    </div>
  );
}

export default Content;
