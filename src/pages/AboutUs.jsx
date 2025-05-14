import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Spinner from '../components/Spinner';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="p-8 mx-auto">
      <Helmet>
        <title>About-JobTracker</title>
      </Helmet>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="bg-white shadow-xl rounded-2xl p-6 md:p-10 text-center"
      >
        <motion.h1 
          variants={item}
          className="text-4xl font-bold text-green-600 mb-4"
        >
          About JobTrack
        </motion.h1>
        
        <motion.p variants={item} className="text-gray-700 text-lg mb-6">
          At <strong>JobTrack</strong>, we're more than just a job portal — we're a career companion. Born out of a passion to bridge the gap between skilled talent and forward-thinking companies, JobTrack is designed to make your professional journey smoother, smarter, and more successful.
        </motion.p>

        <motion.p variants={item} className="text-gray-700 text-lg mb-6">
          🌐 <strong>For job seekers:</strong> Whether you're a fresh graduate or a seasoned expert, JobTrack offers personalized job recommendations, application tracking, resume tips, and career insights that help you stand out. No more guessing — just strategic moves toward your dream role.
        </motion.p>

        <motion.p variants={item} className="text-gray-700 text-lg mb-6">
          🏢 <strong>For employers:</strong> Hiring made easy. JobTrack equips companies with intelligent filtering tools, AI-powered candidate matching, and streamlined communication so you can find and hire the right fit — fast.
        </motion.p>

        <motion.p variants={item} className="text-gray-700 text-lg mb-6">
          📈 Our mission is to create a job ecosystem where opportunity meets efficiency. We're constantly evolving with the latest technology — from AI-driven search to mobile-friendly experiences — so your next job or hire is just a click away.
        </motion.p>

        <motion.p variants={item} className="text-gray-700 text-lg mb-6">
          🤝 Trusted by thousands of professionals and hundreds of employers across industries, JobTrack is not just a portal — it's a launchpad for success. Join us as we reshape the future of work.
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-gray-100 text-green-600 px-6 py-3 rounded-full text-lg shadow hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Talent
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;