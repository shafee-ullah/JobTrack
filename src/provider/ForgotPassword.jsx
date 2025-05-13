import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const ForgotPassword = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [email, setEmail] = useState(queryParams.get('email') || '');
    const [message, setMessage] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Password reset email sent! Check your inbox.');
                toast.success('Password reset email sent!');
                // Redirect to Gmail
                window.open('https://mail.google.com', '_blank');
            })
            .catch((error) => {
                setMessage(error.message);
                toast.error(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Reset Password</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset Password</button>
                        </div>
                        {message && <p className="text-green-600">{message}</p>}
                        <p>Remember your password? <NavLink to="/auth/login" className="text-blue-600 font-bold">Login</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;