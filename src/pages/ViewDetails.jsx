import { useLoaderData, useParams, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";
import {
  ArrowLongLeftIcon,
  CheckIcon,
  HandThumbUpIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ViewDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [company, setCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allData = useLoaderData();
  const params = useParams();
  const location = useLocation();

  // Load all data
  useEffect(() => {
    if (allData) {
      setData(allData);
      setLoading(false);
    }
  }, [allData]);

  // Handle route params or location state
  useEffect(() => {
    if (location.state?.company && location.state?.job) {
      setCompany(location.state.company);
      setSelectedJob(location.state.job);
    } else if (params.companyId) {
      const foundCompany = data.find((c) => c.id === params.companyId);
      if (foundCompany) {
        setCompany(foundCompany);
        setSelectedJob(null);
      }
    } else if (params.jobId) {
      for (const c of data) {
        const job = c.jobs?.find((j) => j.id === params.jobId);
        if (job) {
          setCompany(c);
          setSelectedJob(job);
          break;
        }
      }
    }
  }, [data, params, location.state]);

  if (loading) return <Spinner />;
  if (!company) return <div className="text-center py-10">No data found</div>;

  const breadcrumbs = [
    { name: "Companies", href: "/", current: false },
    { name: company.name, href: "#", current: !selectedJob },
    ...(selectedJob
      ? [{ name: selectedJob.title, href: "#", current: true }]
      : []),
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <Helmet>
        <title>Company-Details</title>
      </Helmet>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <a href="/" className="text-xl font-bold text-gray-900">
                  Welcome to JobTrack
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-t border-gray-200 py-3">
            <nav aria-label="Breadcrumb" className="flex">
              <div className="hidden sm:block">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <a href="/" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon
                          aria-hidden="true"
                          className="size-5 shrink-0"
                        />
                        <span className="sr-only">Home</span>
                      </a>
                    </div>
                  </li>
                  {breadcrumbs.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <a
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-8">
        {/* Company Info */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="shrink-0">
              <div className="relative">
                <img
                  alt={company.name}
                  src={company.logo}
                  className="size-16 rounded-full"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full shadow-inner"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {company.name}
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {company.industry} • {company.location}
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-stretch space-y-4 space-y-reverse sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-3">
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            {/* Job List */}
            <section aria-labelledby="jobs-title">
              <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="jobs-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Available Positions
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {company.jobs?.length || 0} open positions at {company.name}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="space-y-4">
                    {company.jobs?.map((job) => (
                      <div
                        key={job.id}
                        className="group bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white transition-all border border-gray-200 hover:border-green-500 rounded-xl p-6 shadow-sm hover:shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                      >
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2M7 8h10M7 8a4 4 0 014-4h2a4 4 0 014 4M7 8v6a4 4 0 004 4h2a4 4 0 004-4V8"
                              />
                            </svg>
                            <span className="font-medium">{job.jobType}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 1.343-3 3m0 0a3 3 0 003 3m0-6a3 3 0 013 3m-3 3v1m0 4h.01"
                              />
                            </svg>
                            <span className="font-medium">{job.salary}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setIsModalOpen(true);
                          }}
                          className="btn bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full shadow transition"
                        >
                          View Details
                        </button>
                      </div>
                    ))}
                    {company.jobs?.length === 0 && (
                      <div className="text-center py-6 text-gray-500">
                        No open positions at this time
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Company Details */}
          <section
            aria-labelledby="company-details-title"
            className="lg:col-span-1 lg:col-start-3"
          >
            <div className="bg-white px-4 py-5 shadow-sm sm:rounded-lg">
              <h2
                id="company-details-title"
                className="text-lg font-medium text-gray-900"
              >
                Company Details
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">About</h3>
                  <p className="mt-2 text-sm text-gray-900">
                    {company.description || "No description provided."}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Industry
                  </h3>
                  <p className="mt-2 text-sm text-gray-900">
                    {company.industry}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Location
                  </h3>
                  <p className="mt-2 text-sm text-gray-900">
                    {company.location}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-xl p-6 relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedJob.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {company.name} • {selectedJob.location}
                </p>
              </div>
            </div>

            {selectedJob.bannerImage && (
              <img
                src={selectedJob.bannerImage}
                alt={selectedJob.title}
                className="w-full h-48 object-cover mt-4 rounded-lg"
              />
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {selectedJob.jobType}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Salary</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {selectedJob.salary}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Job Description
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {selectedJob.description}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Requirements
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 shrink-0 text-green-500 mr-2 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-between">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Apply Now
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
