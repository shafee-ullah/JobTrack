import { useLocation, useParams } from "react-router";

const ViewDetails = () => {
  const { state } = useLocation();
  const { companyId, jobId } = useParams();

  // Determine if we're viewing company or job details
  const isCompany = !!companyId;
  const { company, job } = state || {};

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {isCompany ? (
            /* Company Details */
            <>
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20"
                />
                <div className="space-y-2">
                  <p>
                    <strong>Industry:</strong> {company.industry}
                  </p>
                  <p>
                    <strong>Location:</strong> {company.location}
                  </p>
                  <a href={company.website} className="link link-primary">
                    Company Website
                  </a>
                </div>
              </div>
            </>
          ) : (
            /* Job Details */
            <>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>Company:</strong> {company.name}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>
                <p>
                  <strong>Type:</strong> {job.jobType}
                </p>

                <div className="mt-6">
                  <h2 className="text-xl font-bold">Description</h2>
                  <p>{job.description}</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-bold">Requirements</h2>
                  <ul className="list-disc pl-6">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={company.website}
                  className="btn 
              
              rounded-3xl 
              bg-green-600 
              text-white
              hover:bg-[rgba(11,130,5,1)]
              border-none mt-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
