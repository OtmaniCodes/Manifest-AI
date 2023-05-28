import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../../redux/authSlice';
import axiosHttpClient from '../../../services/http-client';
import { ACCESS_TOKEN_STORAGE_KEY } from '../../../utils/constants';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  if (authState.loggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (data) => {
    try {
      console.log("DATA", data);
      const response = await axiosHttpClient.post('/login', data);
      if(!response.isError){
        const {status, statusText, data} = response;
        if (statusText.toLocaleLowerCase() === "ok" && status === 200) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.access_token)
          dispatch(loginSuccess(data));
          navigator('/', {replace: true})
        }
      }else{
        console.log("ERROR", response.message);
      }
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <p>This field is required</p>}

      <input {...register('password', { required: true })} type="password" placeholder="Password" />
      {errors.password && <p>This field is required</p>}

      <Link to={'/register'}>
       or register
      </Link>
      
      <input type="submit" />
    </form>
  );
};

export default Login;
