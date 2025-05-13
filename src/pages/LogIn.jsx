import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex w-11/12 mx-auto mt-10 flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              New to JobTrack?{" "}
              <NavLink
                to="/auth/register"
                className="font-semibold text-green-600 hover:text-green-700"
              >
                Register here
              </NavLink>
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div className="mt-2 text-right">
                  <NavLink
                    to="/auth/forgot-password"
                    className="text-sm text-green-600 hover:text-green-700"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgba(11,130,5,1)]"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm font-medium text-gray-500">
                  <span className="bg-white px-4">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
                >
                  <FcGoogle className="h-5 w-5" />
                  <span>Google</span>
                </button>
              </div>

              <div className="mt-6 flex justify-center">
                <NavLink
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-green-600 p-3 text-white shadow-sm hover:bg-green-700"
                  aria-label="Back to Home"
                  title="Back to Home"
                >
                  <IoReturnDownBackSharp className="h-5 w-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LogIn;
