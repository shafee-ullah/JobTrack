import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FaUserCircle, FaCamera } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    My Profile
                </h1>

                {/* Photo Section */}
                <div className="relative mb-8 flex justify-center">
                    <div className="group relative">
                        {user?.photoURL ? (
                            <img 
                                src={user.photoURL} 
                                alt="Profile" 
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        ) : (
                            <FaUserCircle className="w-32 h-32 text-gray-400" />
                        )}
                        <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full shadow-sm hover:bg-green-700 transition-colors">
                            <FaCamera className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-6">
                    {/* Name Field */}
                    <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-gray-600 font-medium">Name</span>
                        <span className="text-gray-900">{user?.displayName || 'No name provided'}</span>
                    </div>

                    {/* Edit Button */}
                    <div className="mt-8">
                        <NavLink 
                            to="/update-profile" 
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex justify-center items-center"
                        >
                            Edit Profile
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;