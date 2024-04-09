import React, { useState } from 'react';
import ourApi from '../constants/ourapi';
import {useNavigate,Link} from 'react-router-dom'


function LoginScreen() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState('');
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
    setSubmitted(true);
    ourApi.post('login',values)
    .then(result => {console.log(result)
    if(result.data === "Success"){
        nav('/')
    }else{
        setErrors(result.data)
    }})
    .catch(err => console.log(err))
  
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>

        <input
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />

        <input
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button className="form-field" type="submit">
          Login
        </button>
        {submitted && errors &&(
          <span className="error-message">{errors}</span>
        )}
      </form>
    </div>
  );
}

export default LoginScreen;