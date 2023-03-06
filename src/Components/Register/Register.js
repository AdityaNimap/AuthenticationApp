import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    mobNo: "",
    email: "",
    dob: "",
    pwd: ""
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    localStorage.setItem("users", localStorage.getItem("user") ? JSON.stringify([...JSON.parse(localStorage.getItem("user")),input]) : JSON.stringify([input]) )
    navigate('/login')
  }
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login')
  }
  // const handleSignUpClick = (e) => {
  //   e.preventDefault();

  //   // to store values in local storage
  // }
  return (

    <>
      <div className='main'>
        <div className='form'>
          <p className='register'>Registration</p>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td className='lable'><label>Name  </label></td>
                  <td><input className='input' type='text' name='name'
                    value={input.name}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} required /></td>
                </tr>
                <tr>
                  <td className='lable'><label>Mobile No.  </label></td>
                  <td><input className='input' type='number'
                    name='mobNo'
                    value={input.mobNo}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='lable'><label>Email  </label></td>
                  <td><input className='input' type='email'
                    name='email'
                    value={input.email}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} required/></td>
                </tr>
                <tr>
                  <td className='lable'><label>Date of Birth  </label></td>
                  <td><input className='input' type='date'
                    name='dob'
                    value={input.dob}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='lable'><label>Password</label></td>
                  <td><input className='input' type='password'
                    name='pwd'
                    value={input.pwd}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} required/></td>
                </tr>
              </tbody>
            </table>
            <button className='btn' onClick={handleLoginClick}>Login</button>
            <button className='btn'>SignUp</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
