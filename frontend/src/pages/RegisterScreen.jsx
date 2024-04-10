import React, { useState } from 'react';
import ourApi from '../constants/ourapi';
import {useNavigate,Link} from 'react-router-dom'


function RegisterScreen() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [errors, setErrors] = useState({});
  const nav = useNavigate()

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    setSubmitted(true);
    ourApi.post('register',values)
    .then(result => {console.log(result)
    nav('/login')})
    .catch(err => console.log(err))
  
  };

  const validateForm = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please enter a first name';
    }
    if (!values.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      errors.password = 'Please enter a password';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    setValid(Object.keys(errors).length === 0);
  };

  return (
    <div className="flex justify-between  form-container w-screen h-screen  bg-[#FDE4CE]">
      <form className="register-form grid content-center justify-items-center gap-10 p-10" onSubmit={handleSubmit}>
      <img src='/fulllogo.svg' className='max-w-sm'/>
      <div className='flex justify-between gap-10'>
        <Link to="/login"><h1 className='text-xl font-bold'>LOGIN</h1></Link>
        <h1 className='text-xl font-bold underline'>REGISTER</h1>
      </div>
        <input
          className="form-field field"
          type="text"
          placeholder="First Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        {submitted && errors.name && (
          <span className="error-message">{errors.name}</span>
        )}

        <input
          className="form-field field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        {submitted && errors.email && (
          <span className="error-message">{errors.email}</span>
        )}

        <input
          className="form-field field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        {submitted && errors.password && (
          <span className="error-message">{errors.password}</span>
        )}

        <input
          className="form-field field "
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleInputChange}
        />
        {submitted && errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}

        <button className="form-field lrbtn" type="submit">
          Register
        </button>
        <Link to='/login'><p>Already have an account?</p></Link>
      </form>
      <div className='grid place-items-end place-content-start'>
        <img src='/images/register.png' className='max-w-md'/>
        <ul className='p-8 font-semibold tracking-wide bg-[#fcd8bf] rounded-xl'>
        <li className='p-1'/>Stir Up is an AI recipe search engine that lets you search by ingredients 
        <li className='p-1'/>30k+ Recipes at your fingertips
        <li className='p-1'/>Recipes at your customized level
        <li className='p-1'/>Helps you organize, share and plan your meals 
        <li className='p-1'/>Generates personalizedrecipestailored to your unique tastes and dietary preferences.
        </ul>
      </div>
    </div>
  );
}

export default RegisterScreen;