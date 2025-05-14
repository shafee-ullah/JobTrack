import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  
  const greenColors = [
    // 'text-green-600', 
    // 'text-green-700', 
    'text-green-500', 
  ];

  const bgColors = [
    // 'bg-green-600', 
    // 'bg-green-700', 
    'bg-green-500', 
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 px-2 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Jobs Added */}
      <motion.div 
        variants={statItem}
        whileHover={{ y: -5 }}
        className="stats shadow bg-white rounded-box p-6 text-center hover:shadow-lg transition-shadow border border-green-100"
      >
        <div className="stat">
          <div className={`stat-value ${greenColors}`}>
            {inView && (
              <CountUp
                start={0}
                end={123012}
                duration={2.5}
                separator=","
                delay={0.2}
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold text-gray-700">
            Jobs Added
          </div>
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 h-1 ${bgColors}`}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Active Resumes */}
      <motion.div 
        variants={statItem}
        whileHover={{ y: -5 }}
        className="stats shadow bg-white rounded-box p-6 text-center hover:shadow-lg transition-shadow border border-green-100"
      >
        <div className="stat">
          <div className={`stat-value ${greenColors}`}>   
            {inView && (
              <CountUp
                start={0}
                end={187432}
                duration={2.5}
                separator=","
                delay={0.4}
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold text-gray-700">
            Active Resumes
          </div>
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 h-1 ${bgColors}`}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
        </div>
      </motion.div>

      {/* Positions Matched */}
      <motion.div 
        variants={statItem}
        whileHover={{ y: -5 }}
        className="stats shadow bg-white rounded-box p-6 text-center hover:shadow-lg transition-shadow border border-green-100"
      >
        <div className="stat">
          <div className={`stat-value ${greenColors}`}>
            {inView && (
              <CountUp
                start={0}
                end={140312}
                duration={2.5}
                separator=","
                delay={0.6}
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold text-gray-700">
            Positions Matched
          </div>
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 h-1 ${bgColors}`}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatsCounter;