import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const OurSuccess = () => {
  const stories = [
    {
      name: 'John Lewart',
      role: 'Software Engineer at CodeCraft',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      story: `JobTrack helped me find a role that perfectly matches my skills. The platform's intuitive design and smart recommendations made the job hunt simple and effective.`
    },
    {
      name: 'Ash Kriston',
      role: 'Data Analyst at InsightAI',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      story: `I transitioned from academia into the corporate world thanks to JobTrack. The resume tips and interview prep guides were a game-changer for me.`
    },
    {
      name: 'Tanvir Ahmed',
      role: 'HR Executive at PeoplePulse',
      image: 'https://randomuser.me/api/portraits/men/58.jpg',
      story: `As a recruiter, JobTrack has streamlined our entire hiring process. We've filled key roles faster and found better matches than ever before.`
    },
    {
      name: 'Marry Jane',
      role: 'Digital Marketer at GrowNow',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      story: `JobTrack helped me land a remote position with an international firm. The global job filters are super helpful for candidates looking beyond borders.`
    },
    {
      name: 'Jeffrey Smith',
      role: 'UI/UX Designer at PixelPerfect',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      story: `I built a portfolio and applied to jobs through JobTrack's integrated tools. I quickly got interview calls from top firms. Great platform!`
    },
    {
      name: 'Kim Lee',
      role: 'Project Manager at DevFlow',
      image: 'https://randomuser.me/api/portraits/women/85.jpg',
      story: `I love how easy it was to track every stage of my applications. JobTrack made me feel empowered and organized throughout the hiring process.`
    }
  ];

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

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

  const cardItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const headerItem = {
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

  return (
    <div>
      <Helmet>
        <title>Success Stories - JobTracker</title> 
      </Helmet>
      
      <div className="px-2 md:px-12 lg:px-16 xl:px-24 mb-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-10"
        >
          <motion.h1 
            variants={headerItem}
            className="text-4xl font-bold text-green-600 mt-6"
          >
            Our Success Stories
          </motion.h1>
          <motion.p 
            variants={headerItem}
            className="text-gray-700 mt-4 text-lg"
          >
            Real journeys. Real impact. Hear how JobTrack has helped professionals from Bangladesh find meaningful work.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white shadow-md rounded-xl p-6 text-center cursor-default"
            >
              <motion.img
                src={story.image}
                alt={story.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <h2 className="text-xl font-semibold text-green-700">{story.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{story.role}</p>
              <p className="text-gray-700 text-base italic">"{story.story}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurSuccess;