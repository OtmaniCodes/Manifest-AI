import React from 'react';
import { useForm } from 'react-hook-form';
import axiosHttpClient from '../../../services/http-client';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {
  const navigator = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (authState.loggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (userData) => {
    try {
      const response = await axiosHttpClient.post('/register', userData);
      if(!response.isError){
        const {status, statusText, data} = response;
        if (statusText.toLocaleLowerCase() === "created" && status === 201) {
            navigator('/login')
        }
      }else{
        console.log("ERROR", response.message);
      }
    } catch (err) {
      console.error("REGISTER ERROR", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>This field is required</p>}

      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <p>This field is required</p>}

      <input {...register('password', { required: true })} type="password" placeholder="Password" />
      {errors.password && <p>This field is required</p>}
      
      <input {...register('password_confirmation', { required: true })} type="password" placeholder="Password" />
      {errors.password_confirmation && <p>This field is required</p>}

      <Link to={'/login'}>
       or login
      </Link>

      <input type="submit" />
    </form>
  );
};

export default Register;
