import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route, useNavigate } from 'react-router-dom'

const Title = 'Page Title'


function Login() {

    useEffect(() => {
        document.body.style.background = 'linear-gradient(0deg, #10344c, #184464)';
        document.body.style.backgroundSize = 'cover';
        document.getElementById('header').style.display = 'none'
        document.getElementById('navBar').style.display = 'none'
    },[])

  return (
    <div id='loginpage'>
        <>
        <Helmet>
          <title>Login</title></Helmet>
        </>
        <form>
            <div id='loginform'>
                <div id='loginicon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                </div>
                <div id='logininput'>
            <div className='logincontainer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
<input type='text' placeholder={' Email ID'}/></div><br></br>
            <div className='loginpassword'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
<input type='password' placeholder={' Password'}/></div>
            </div>
            <div id='LoginOptions'>
            <label><input type='checkbox'/>Remember Me</label>
                <a href='https://google.com'>Forgot Password?</a>
            </div>
            <div>
                <Link to={'dashboard'}><button id='submission' type='submit'>LOGIN</button></Link>
            </div>
            </div>
        </form>

    
    </div>
  )
}

export default Login