import React from 'react';
import { Link } from "react-router";

const JobCatCards = ({ company }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-200 h-full">
      <div className="card-body">
        {/* Company Logo and Name - Clickable Link */}
        <div className="flex items-center gap-4 mb-4">
          <Link
            to={`/company/${company.id}`}
            className="hover:opacity-75 transition-opacity"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 object-contain rounded-lg"
            />
          </Link>
          <Link
            to={`/company/${company.id}`}
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            {company.name}
          </Link>
        </div>

        {/* Job Details */}
        {company.jobs.map((job) => (
          <div key={job.id} className="space-y-3">
            {/* <div className="border-t pt-4">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3a2 2 0 01-2 2h-1v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1H6a2 2 0 01-2-2V8a2 2 0 012-2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {job.jobType}
              </div>
            </div> */}

            {/* View Details Button */}
            <Link
              to={`/job/${job.id}`}
              state={{ job, company }}
              className="btn 
              
              rounded-3xl 
              bg-green-600 
              text-white
              hover:bg-[rgba(11,130,5,1)]
              border-none mt-1
            "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCatCards;
