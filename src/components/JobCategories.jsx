import React, { useEffect, useState } from "react";
import JobCatCards from "./JobCatCards";
import Spinner from "./Spinner";

const JobCategories = ({ jobCategories }) => {
//   if (!jobCategories?.length) return <Spinner />;
const [displayData, setDisplayData] = useState([]);
const [showAll, setShowAll] = useState(false);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const loadData = () => {
      try {
        setIsLoading(true);
        const dataToShow = showAll ? jobCategories : jobCategories.slice(0, 8);
        setDisplayData(dataToShow);

        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error("Error loading lawyer data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, [showAll, jobCategories]);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
    if (!showAll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="py-10 px-4">
      <h2 className="font-bold text-4xl text-center">Popular Job Categories</h2>
      <p className="text-center text-gray-500 mt-4 mb-8 max-w-2xl mx-auto">
        A better career is out there. We'll help you find it. We are your first
        step to becoming a better you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  px-8 md:px-12 lg:px-16 xl:px-24 mt-6">
        {displayData.map((company) => (
          <JobCatCards key={company.id} company={company} />
        ))}
      </div>

      <div className="flex justify-center my-4">
        <button
          className="btn 
            md:btn-md lg:btn-lg xl:btn-lg 
            rounded-3xl 
            bg-green-600 
            text-white
            hover:bg-[rgba(11,130,5,1)]
            border-none mt-5"
          onClick={handleShowAll}
        >
          {showAll ? "Show Less Jobs" : "Show All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default JobCategories;
