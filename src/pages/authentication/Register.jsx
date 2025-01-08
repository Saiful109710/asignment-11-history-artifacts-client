import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import Lottie from 'lottie-react';
import registrationLottie from '../../assets/lottie/registrationLottie.json';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Individual password validations
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Proceed with user registration
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Registration Successful');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="grid grid-cols-2 py-5 max-w-5xl mx-auto">
      <Helmet>
        <title>Register | History Artifact</title>
      </Helmet>
      <div>
        <Lottie animationData={registrationLottie}></Lottie>
      </div>
      <div className="card bg-base-100 w-full shrink-0 ">
        <div>
          <h2 className="text-3xl text-center font-bold text-sky-600">
            Sign Up
          </h2>
        </div>
        <div className="w-full max-w-sm mx-auto space-y-5">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-sky-700 to-sky-500 text-white  rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition duration-300">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="font-bold text-sky-600 ml-2">
              Log In Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
