import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BlogImg from "../assets/gd-group-discussion-tips.jpg";
import BlogImg2 from "../assets/istockphoto.jpg";
import BlogImg3 from "../assets/istockphoto-1453843862-612x612.jpg";

const blogs = [
  {
    title: "How To Set Team Goals?",
    excerpt:
      "Setting team goals is an essential process for ensuring collaboration,...",
    date: "May 1, 2025",
image : BlogImg,
    tag: "How To Set Team Goals?",
  },
  {
    title: "How to Set Your Career Goals?",
    excerpt: "Setting career goals is a vital step toward building a...",
    date: "May 1, 2025",
    image : BlogImg2,
    tag: "How To Set Team Goals?",
  },
  {
    title: "Tips for Effective Communication in the Workplace",
    excerpt:
      "In Bangladesh’s fast-growing professional landscape, effective communication is more than...",
    date: "May 1, 2025",
    image : BlogImg3,
    tag: "Tips for Effective Communication in the Workplace",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className=" px-2  md:px-12 lg:px-16 xl:px-24 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Impactful Insights: Our Latest Blogs
          </h2>
          <p className="text-gray-600 mt-2">
            Empowering Careers, Enriching Lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <span className="inline-block mb-2 text-sm font-medium text-gray-600">
                  {blog.tag}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                {/* 
              <a href={blog.link} className="text-green-600 font-semibold hover:underline">
                Read More
              </a> */}

                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <FaCalendarAlt className="mr-2" />
                  {blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
