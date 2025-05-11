import React from 'react';
import Hero from '../components/Hero';
import JobCategories from '../components/JobCategories';
import { useLoaderData } from 'react-router';
import JobsiteTrack from '../components/JobsiteTrack';
import Blogs from '../components/Blogs';

const Home = () => {
    const jobCategories = useLoaderData();
    // console.log(jobCategories); 
    return (
        <div>
            <Hero />
            <JobsiteTrack />
            <JobCategories jobCategories={jobCategories} />
            <Blogs />

        </div>
    );
};

export default Home;