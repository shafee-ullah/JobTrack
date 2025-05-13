import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import JobCategories from '../components/JobCategories';
import { useLoaderData } from 'react-router';
import JobsiteTrack from '../components/JobsiteTrack';
import Blogs from '../components/Blogs';
import { Helmet } from 'react-helmet';
import Spinner from '../components/Spinner';

const Home = () => {
    const jobCategories = useLoaderData();

    const [loading, setLoading] = useState(true);
      
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 100);
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <Spinner />;
    // console.log(jobCategories); 
    return (
        <div>
            <Helmet>
        <title>Home - JobTracker</title>
        <meta name="description" content="Track your job applications easily with JobTracker." />
      </Helmet>
            <Hero />
            <JobsiteTrack />
            <JobCategories jobCategories={jobCategories} />
            <Blogs />

        </div>
    );
};

export default Home;