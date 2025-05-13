import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import {
  CheckCircleIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    updateUserProfile(name, photoURL)
      .then(() => {
        setSuccess("Updated Successfully");
        setTimeout(() => navigate("/profile"), 1000);
      })
      .catch(() => {
        setError("Not Updated, Error Occurred");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Update Profile
        </h1>

        {/* Success Alert */}
        {success && (
          <div className="rounded-md bg-green-50 p-4 mb-4">
            <div className="flex">
              <div className="shrink-0">
                <CheckCircleIcon
                  className="size-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{success}</p>
              </div>
              <div className="ml-auto pl-3">
                <button
                  onClick={() => setSuccess("")}
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                  <XMarkIcon className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mb-4">
            <div className="flex">
              <div className="shrink-0">
                <ExclamationTriangleIcon
                  className="size-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
