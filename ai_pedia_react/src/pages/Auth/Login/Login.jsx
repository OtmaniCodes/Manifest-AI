import './Login.css'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../../redux/authSlice';
import axiosHttpClient from '../../../services/http-client';
import { ACCESS_TOKEN_STORAGE_KEY } from '../../../utils/constants';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoggin, setIsLoggin] = useState(false);


  if (authState.loggedIn) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (location.state ? location.state.afterSignUp : false) {
      toast.success('Your account is successfully created! You can login now.', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      location.state.afterSignUp = false;
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsLoggin(true);
      const response = await axiosHttpClient.post('/login', data);
      setIsLoggin(false);
      if(!response.isError){
        const {status, statusText, data} = response;
        if (statusText.toLocaleLowerCase() === "ok" && status === 200) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.access_token)
          dispatch(loginSuccess(data));
          // window.location.href = '/';
          navigator('/', {replace: true, state: {afterLogin: true}});
          toast.success('You logged in successfully!', {
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
      }else{
        const {status, statusText, data} = response;
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
      console.log(err);
      toast.error('An error occured! try again later.', {
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
    <div className="login-page">
      <div className="container h-100">

      <div className="auth-form">
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <span className="title">Log In</span>
              {/* <span className="subtitle">Create a free account with your email.</span> */}
              <span className="subtitle">Log in to your existing account with your email.</span>
              <div className="form-container">

                <input className="input" type="email" {...register('email', { required: true })} placeholder="Email" />
                
                <input className="input" type="password" {...register('password', { required: true })} placeholder="Password" />
              </div>
                {(errors.email || errors.password) && <label className="text-white">Email is required</label>}
              <button type="submit" disabled={isLoggin}>{isLoggin ? 'Logging you in...' : 'Login'}</button>
          </form>
          <div className="form-section">
            <p>Don't have an account? <a href="#" onClick={() => navigator('/register', {replace: true})}>Register</a> </p>
          </div>
        </div>
      </div>

      <ToastContainer/>








      </div>
    </div>
  );
};

export default Login;
