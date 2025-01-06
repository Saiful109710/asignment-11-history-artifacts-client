import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../../components/SocialLogin'
import Lottie from 'lottie-react'
import registrationLottie from '../../assets/lottie/registrationLottie.json'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'

const Register = () => {

    const {createUser} =useAuth()
    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success('Registration Successful')
            navigate('/')
        })
        .catch(err=>{
            console.log(err.message)
            toast.error(err.message)
        })







        
    }
  return (
    <div className="grid grid-cols-2">
    <div>
        <Lottie animationData={registrationLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full  shrink-0 ">
      <div>
        <h2 className="text-3xl text-center font-bold text-sky-600">
          Sign Up
        </h2>


        
      </div>
      <div className="w-full max-w-sm mx-auto space-y-5">
        <form onSubmit={handleSubmit} className=" w-full  ">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Name"
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
         
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-sky-500 ">Register</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
        <p className='text-center'>Already have account?<Link to='/login' className="font-bold text-sky-600 ml-2">Log In Now</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Register
