import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
    //     <div>
    //          <div className="p-8  mx-auto mt-10">
    //   <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 text-center">
    //     <h1 className="text-4xl font-bold text-green-600 mb-4">About JobTrack</h1>
    //     <p className="text-gray-700 text-lg mb-6">
    //       Welcome to <strong>JobTrack</strong> – your trusted partner in building a better career future. <br /> We are a cutting-edge job portal dedicated to connecting talented individuals with top companies around the globe.
    //     </p>
    //     <p className="text-gray-700 text-lg mb-6">
    //       At JobTrack, we empower job seekers with smart tools, real-time job tracking, and AI-driven recommendations to land their dream job faster. For employers, we streamline recruitment by providing powerful filters, insights, and seamless communication tools.
    //     </p>
    //     <p className="text-gray-700 text-lg mb-6">
    //       Whether you're hunting for your first job or scouting talent for your growing team – JobTrack makes the process smarter, faster, and more human.
    //     </p>
    //     <Link to="/jobs" className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-full text-lg  hover:bg-green-700 transition">
    //       Explore Jobs
    //     </Link>
    //   </div>
    // </div>
    //     </div>

    <div className="p-8  mx-auto">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">About JobTrack</h1>
        
        <p className="text-gray-700 text-lg mb-6">
          At <strong>JobTrack</strong>, we're more than just a job portal — we're a career companion. Born out of a passion to bridge the gap between skilled talent and forward-thinking companies, JobTrack is designed to make your professional journey smoother, smarter, and more successful.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          🌐 <strong>For job seekers:</strong> Whether you're a fresh graduate or a seasoned expert, JobTrack offers personalized job recommendations, application tracking, resume tips, and career insights that help you stand out. No more guessing — just strategic moves toward your dream role.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          🏢 <strong>For employers:</strong> Hiring made easy. JobTrack equips companies with intelligent filtering tools, AI-powered candidate matching, and streamlined communication so you can find and hire the right fit — fast.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          📈 Our mission is to create a job ecosystem where opportunity meets efficiency. We're constantly evolving with the latest technology — from AI-driven search to mobile-friendly experiences — so your next job or hire is just a click away.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          🤝 Trusted by thousands of professionals and hundreds of employers across industries, JobTrack is not just a portal — it's a launchpad for success. Join us as we reshape the future of work.
        </p>

        <div className="mt-8">
          
          <Link to="/" className="inline-block bg-gray-100 text-green-600 px-6 py-3 rounded-full text-lg shadow hover:bg-gray-200 transition">
            Hire Talent
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;