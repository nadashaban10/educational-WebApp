import React, { useState, useContext } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import RegistrationPopup from './RegisterPopup';
// import { AuthContext } from '../context/AuthContext';

const Register = ({ handleLoginOpen }) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state
    const [loading, setLoading] = useState(false); // Loading state

    const handleClick = () => {
        navigate('/Login');
    };

    const fetchRegisterUser = async (name, email, password, phone) => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/auth/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email: { email: email }, password, phone: { phone: phone } }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsPopupOpen(true); // Show popup on successful registration
            } else {
                console.error('Registration failed:', data.errors || data.message);
                setError(data.errors || data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('Error during registration. Please try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleRegisterClick = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state
        await fetchRegisterUser(name, email, password, phone);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="h-[550px] flex items-center justify-center mt-[70px] rtl">
            <div className="p-6 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-[#254466] mb-5">Create Account</h2>
                <p className="text-gray-400 p-2">Please enter your details to create an account.</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleRegisterClick}>
                    <div className="mb-6 relative">
                        <FaUser className="absolute left-3 top-3 text-black" />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Name"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <FaEnvelope className="absolute left-3 top-3 text-black" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full px-10 py-3 border border-gray-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
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
                    <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-3 text-black" />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                            className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                            placeholder="Phone"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1A76D1] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#1A76D1] transition duration-300 ease-in-out"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Loading...' : 'Create Account'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button onClick={handleClick} className="text-[#1A76D1] hover:underline">
                            Login
                        </button>
                    </p>
                </div>

                {/* Registration Popup */}
                <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
            </div>
        </div>
    );
};

export default Register;