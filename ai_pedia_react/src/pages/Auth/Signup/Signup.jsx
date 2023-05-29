import './Signup.css'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosHttpClient from '../../../services/http-client';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const navigator = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (authState.loggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (userData) => {
    try {
      setIsSigningUp(true);
      const response = await axiosHttpClient.post('/register', userData);
      setIsSigningUp(false);
      if(!response.isError){
        const {status, statusText, data} = response;
        if (statusText.toLocaleLowerCase() === "created" && status === 201) {
            navigator('/login', {replace: true, state: {afterSignUp: true}})
        }
      }else{
        const {status, statusText, data, errors} = response;
        const errorMessage = (response.message && response.message !== 'error') ? response.message : response.errors.join('\n');
        toast.error(errorMessage, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      }
    } catch (err) {
      toast.error('An error occured! try again later/', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
    }
  };

  return (

    <div className="register-page">
      <div className="container h-100">

      <div className="auth-form">
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <span className="title">sign up</span>
              <span className="subtitle">Create a free account with your email.</span>
              <div className="form-container">

                <input className="input" type="text" {...register('name', { required: true })} placeholder="Name" />
                <input className="input" type="email" {...register('email', { required: true })} placeholder="Email" />
                
                <input className="input" type="password" {...register('password', { required: true })} placeholder="Password" />
                <input className="input" {...register('password_confirmation', { required: true })} type="password" placeholder="Confirm Password" />
              </div>
                {(errors.email || errors.email || errors.password || errors.password_confirmation) && <label className="text-white">All fields are required!</label>}
              <button type="submit" disabled={isSigningUp}>{isSigningUp ? 'Creating your account...' : 'Sign up'}</button>
          </form>
          <div className="form-section">
            <p>Already have an account? <a href="#" onClick={() => navigator('/login', {replace: true})}>login</a> </p>
          </div>
        </div>
      </div>

      <ToastContainer/>
      </div>
    </div>




  );
};

export default Register;
