import React from "react";
import loginLottie from "../../assets/lottie/loginLottie.json";
import Lottie from "lottie-react";
import SocialLogin from "../../components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {

    const {signIn} = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)


    const handleSubmit = (e)=>{
        e.preventDefault();

        const email = e.target.email.value
        const password= e.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
          console.log(result)
          toast.success('Login Successfully ')
          navigate(location?.state || '/')
        })
        .catch(err=>{
            console.log(err.message)
            toast.error(err.message)
        })


    }
  return (
    <div className="grid grid-cols-2">
      <Helmet>
              <title>Login | History Artifact</title>
            </Helmet>
      <div>
        <Lottie animationData={loginLottie}></Lottie>
      </div>
      <div className="card bg-base-100 w-full  shrink-0 ">
        
        <div className="w-full max-w-sm mx-auto space-y-5">
            <div>
                <h2 className="text-3xl font-bold text-sky-600  text-center">Sign In</h2>
            </div>
          <form onSubmit={handleSubmit} className=" w-full  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
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
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-sky-700 to-sky-500 text-white btn rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition duration-300">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
          <p className="text-center">Don't have account?<Link to='/register' className="font-bold text-sky-700 ml-3">Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
