import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const RegistrationPopup = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/Login');
        onClose();
    };

    return (
        <Popup 
            open={isOpen} 
            onClose={onClose} 
            contentStyle={{ width: '430px', height: '400px', border: 'none', background: 'transparent' }} // Custom styles for the popup content
        >
            <motion.div 
                className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <div className='absolute top-[50px] text-[#1A76D1] text-[150px] font-bold'>
                    <IoCheckmarkDoneCircleOutline />
                </div>
                <div className='bg-[] h-[200px] w-[390px]'></div>
                <h2 className='font-bold text-2xl pb-3'>Registration Successful</h2>
                <p className='mb-5'>Please check your email for further instructions.</p>
                <button onClick={handleLoginRedirect} className='bg-[#1A76D1] text-white py-2 px-4 rounded-md '>
                    Go to Login
                </button>
            </motion.div>
        </Popup>
    );
};

export default RegistrationPopup;