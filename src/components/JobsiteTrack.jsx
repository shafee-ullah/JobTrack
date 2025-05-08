import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 px-2  md:px-12 lg:px-16 xl:px-24">
      {/* Jobs Added */}
      <div className="stats shadow bg-base-100 rounded-box p-6 text-center">
        <div className="stat">
          <div className="stat-value ">
            {inView && (
              <CountUp
                start={0}
                end={123012}
                duration={2}
                separator=","
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold">
            Jobs Added
          </div>
        </div>
      </div>

      {/* Active Resumes */}
      <div className="stats shadow bg-base-100 rounded-box p-6 text-center">
        <div className="stat">
          <div className="stat-value ">   
            {inView && (
              <CountUp
                start={0}
                end={187432}
                duration={2}
                separator=","
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold">
            Active Resumes
          </div>
        </div>
      </div>

      {/* Positions Matched */}
      <div className="stats shadow bg-base-100 rounded-box p-6 text-center">
        <div className="stat">
          <div className="stat-value ">
            {inView && (
              <CountUp
                start={0}
                end={140312}
                duration={2}
                separator=","
              />
            )}
          </div>
          <div className="stat-title mt-2 text-lg font-semibold">
            Positions Matched
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;