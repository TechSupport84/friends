import React, { useState } from 'react';
import '../Login.css'; 
import "../Link-Logo.css"

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("")
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e)=>setUsername(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    setError(''); // Clear any previous errors

    // Simulate authentication (replace with actual login logic)
    console.log("Logging in:", { email, password });
    alert("Login successful (dummy function)");
  };

  return (
    <>
    <div className="screens">
    <div className="left-side">
        <div className="logo">
            <img src='../Friends.png' />
        </div>
    </div>
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="login-form">
      <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <div className="extra-options">
        <p>Already  have an account? <a href="/Login">Login now</a></p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Register ;
