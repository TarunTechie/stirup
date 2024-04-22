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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try{
      const reply=ourApi.post('/login',values).then(result=>{
        if(result.data.reply==true)
        {
          console.log("logged in")
          sessionStorage.setItem('userid',result.data.id)
        }
        else
        {
          setErrors("not user")
        }
      })
    }
    catch(error)
    {
      console.log(error)
    }
  };

  return (
    <div className="flex justify-between  form-container h-screen overflow-hidden bg-[#FDE4CE]">
      <div className='grid justify-between'>
        <img src='/fulllogo.svg' className='max-w-lg'/>
        <img src='/images/login.png' className='max-w-xl'/>
      </div>
      <form className="login-form grid w-1/3 mx-auto content-center justify-items-center gap-10 p-10 " onSubmit={handleSubmit}>
      <div className='flex justify-between gap-10'>
        <h1 className='text-xl font-extrabold text-maron underline underline-offset-8'>LOGIN</h1>
        <Link to="/register"><h1 className='text-xl font-extrabold text-maron'>REGISTER</h1></Link>
      </div>

        <input
          className="form-field field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />

        <input
          className="form-field field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button className="form-field lrbtn" type="submit">
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