import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    

    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        
        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success('Profile updated successfully!');
                navigate('/profile');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Update Profile
          </h1>
      
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-gray-600 font-medium">Name</label>
              </div>
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
              <div className="flex items-center justify-between">
                <label className="text-gray-600 font-medium">Photo URL</label>
              </div>
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


