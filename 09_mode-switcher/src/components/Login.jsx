import React, {useState, useContext, } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const {setUser} = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='text-center '>

      <h1>Login</h1>

      <input type='text' 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='username' />

      <input type='text' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
