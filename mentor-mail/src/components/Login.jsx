import { Link } from 'react-router-dom'
const Login=()=>{
    return(
        <>
        <div className="todo-app">
            <h1 id='l1'>Login</h1>
            <h3 id='l2'>Email-Id</h3>
            <input id='l3' type="text" placeholder="aabb1@gmail.com" required></input>
            <h3 id='l4'>Password</h3>
            <input id='l5' type="password" placeholder="aabb@123" required></input>
            <Link to='/TodoList'><button id='l6'>Submit</button></Link>
        </div>
        </>
    );
}
export default Login;