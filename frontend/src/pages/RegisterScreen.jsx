import React, { useState } from 'react';
import ourApi from '../constants/ourapi';
import {useNavigate,Link} from 'react-router-dom'


function RegisterScreen() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
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
    if(valid){
      setSubmitted(true);
      ourApi.post('register',values)
      .then(result => {console.log(result)
      if(result.data.name){
        nav('/')
        localStorage.setItem('userInfo', JSON.stringify(result.data))
      }else{
        errors.user="Email already resgistered"
        setErrors(errors)
      }
    })
      .catch(err => console.log(err))
    }

  
  };

  const validateForm = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please enter a first name';
    }
    else if (!values.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
    else if (!values.password) {
      errors.password = 'Please enter a password';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    else if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    setValid(Object.keys(errors).length === 0);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="form-field"
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
          className="form-field"
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
          className="form-field"
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
          className="form-field"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleInputChange}
        />
        {submitted && errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
        {submitted && errors.user && (
          <span className="error-message">{errors.user}</span>
        )}
        <button className="form-field" type="submit">
          Register
        </button>
        <Link to='/login'><p>Already have an account?</p></Link>
      </form>
    </div>
  );
}

export default RegisterScreen;