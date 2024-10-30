import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (username && password) {
      // For now, just navigate to the home screen
      navigate('/home');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Medical Information Simulations</h2>
      <form onSubmit={handleLogin} className="mt-6">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
