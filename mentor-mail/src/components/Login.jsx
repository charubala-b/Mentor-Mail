import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import b11 from 'C:/Users/aparn/OneDrive/Desktop/Mentor-Mail/mentor-mail/src/b11.jpg'; // Import the image


const Login = () => {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // useNavigate hook for navigation

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('https://mentor-mail-backend.onrender.com/add-details', {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let result = await response.json();
            console.warn(result);

            if (result) {
                alert("Data saved successfully");
                setPassword("");
                setName("");
                navigate('/Todo'); // Navigate to TodoList page after successful submission
            }
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save data: " + error.message);
        }
    };

    return (
        <div className="todo-app">
            <img src={b11} alt="Login Image" id='image'/> {/* Use the imported image */}
            <h1 id='l1'>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <label id='l2'><b>Email-Id</b></label>
                <input
                    id='l3'
                    type="email"
                    placeholder="aabb1@gmail.com"
                    required
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
                <label id='l4'><b>Password</b></label>
                <input
                    id='l5'
                    type="password"
                    placeholder="aabb@123"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button id='l6' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
