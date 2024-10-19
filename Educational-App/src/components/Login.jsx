import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleClick = () => {
        navigate('/Register');
    };

    const fetchLoginUser = async (email, password) => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/auth/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data));
                return data;
            } else {
                console.error('Login failed:', data.errors || data.message);
                setError(data.errors || data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Error during login. Please try again.');
        }
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();
        try {
            const userData = await fetchLoginUser(email, password);
            if (userData) {
                navigate('/dashboard'); // Redirect to dashboard or another page on success
            }
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="h-[450px] flex items-center justify-center mt-[70px] rtl">
            <div className="p-6 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#254466] mb-5">Login</h2>
                <p className="text-gray-400 p-2">Please enter your details to login.</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleLoginClick}>
                    <div className="mb-6 relative">
                        <FaEnvelope className="absolute left-3 top-3 text-black" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-3 text-black" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1A76D1] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#1A76D1] transition duration-300 ease-in-out"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <button onClick={handleClick} className="text-[#1A76D1] hover:underline">
                            Register now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;