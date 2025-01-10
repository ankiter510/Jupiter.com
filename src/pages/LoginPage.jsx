import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      setIsSubmitted(true); 
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-cyan-400 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        {isSubmitted ? (
          <h1 className="text-2xl font-bold text-green-500 text-center">
            Login Successful!
          </h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-gray-600 font-medium mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {usernameError && <span className="text-red-500 text-sm mt-1">{usernameError}</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-600 font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {passwordError && <span className="text-red-500 text-sm mt-1">{passwordError}</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">Forgot Password? Contact the hospital admin.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
