import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

function Pricing () {
  const [isYearly, setIsYearly] = React.useState(false);

  const packages = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for beginners to get started.',
      features: [
        { name: '10 Free Lessons', available: true },
        { name: 'Basic Support', available: true },
        { name: 'Limited Access', available: true },
        { name: 'Community Access', available: false },
        { name: 'Email Support', available: false },
      ],
    },
    {
      name: 'Pro',
      price: isYearly ? '$99.99/year' : '$9.99/month',
      description: 'Ideal for regular learners.',
      features: [
        { name: 'Unlimited Lessons', available: true },
        { name: 'Priority Support', available: true },
        { name: 'Unlimited Access', available: true },
        { name: 'Community Access', available: true },
        { name: 'Email Support', available: true },
        { name: 'Access to New Courses', available: true },
      ],
    },
    {
      name: 'Premium',
      price: isYearly ? '$199.99/year' : '$19.99/month',
      description: 'Best for advanced learners.',
      features: [
        { name: 'Unlimited Lessons', available: true },
        { name: 'Priority Support', available: true },
        { name: 'Unlimited Access', available: true },
        { name: 'Personal Mentor', available: true },
        { name: 'Community Access', available: true },
        { name: 'Email Support', available: true },
        { name: 'Access to New Courses', available: true },
        { name: '1-on-1 Sessions', available: true },
      ],
    },
  ];

  return (
    <div id='Pricing' className='flex flex-col items-center justify-center md:px-14 p-4 w-full mx-auto py-10 mt-[40px] mb-[50px] bg-gray-100'>
      <div className='text-center'>
        <motion.h2
          className='md:text-4xl text-3xl font-extrabold font-poppins text-[#366cff] mb-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Pricing Plans
        </motion.h2>
        <motion.p
          className='text-gray-600 md:w-full mx-auto px-4 '
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose the plan that best suits your needs and start learning today!
        </motion.p>
        <div className='mt-8 flex justify-center items-center'>
          <span className='text-2xl font-semibold mr-4'>Monthly</span>
          <div className='relative inline-block w-14 mr-4 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggle'
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
            />
            <label
              htmlFor='toggle'
              className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${isYearly ? 'bg-[#366cff]' : 'bg-gray-300'}`}
            ></label>
            <motion.div
              className='absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-4'
              animate={{ x: isYearly ? 32 : 0 }} // Animate the toggle
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
          <span className='text-2xl font-semibold ml-4'>Yearly</span>
        </div>
      </div>
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center'>
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            className='bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center w-[85%] mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * packages.indexOf(pkg) }} // Staggered animation
          >
            <div>
              <h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
              <p className='text-gray-600 mb-4'>{pkg.description}</p>
              <motion.p
                className='text-3xl font-extrabold mb-4 text-[#366cff]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {pkg.price}
              </motion.p>
              <ul className='text-center mb-6'>
                {pkg.features.map((feature, index) => (
                  <li key={index} className='mb-2 flex items-center justify-center'>
                    {feature.available ? (
                      <FaCheck className='text-green-500 mr-2' />
                    ) : (
                      <FaTimes className='text-red-500 mr-2' />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              className='bg-[#366cff] text-white py-2 px-4 rounded-lg mt-auto'
              whileHover={{ scale: 1.05 }} // Hover animation for button
              whileTap={{ scale: 0.95 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;