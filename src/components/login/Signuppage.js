import React, { useEffect, useState } from "react"
import "./login.css"
import { Link  , useNavigate } from "react-router-dom"
import axios from 'axios'
const Signuppage = ()=>{

    const [username , setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [navigate , setNavigate] = useState(false)
    const navigator = useNavigate()
    async function handleSubmit(e){
      e.preventDefault()
      try {
        const result = await axios.post("http://localhost:3500/signup",{
            username , email , password
        })
        setNavigate(true)
      } catch (err) {
        console.error(err.message)
      }
    }
    useEffect(()=>{
      if(navigate) navigator("/")
    },[navigate])
    return (
        <div className="container sign-up-mode">
         <div className="forms-container">
         <div className="signin-signup">
            <form className="sign-up-form"  onSubmit={handleSubmit}>
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Username" />
                </div>
                <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit" className="btn solid">SignUp</button>
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://www.google.com/account/about/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-google"></i></a>
                </div>
            </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Don't Have an Account ?</h3>
            <p>Feel free to signup</p>
            <Link to="/"  className="btn transparent" id="sign-up-btn">
              Sign up
            </Link>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already had an Account?</h3>
            <p></p>
            <Link to="/" className="btn transparent" id="sign-in-btn">Sign in</Link>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    )
}


export default Signuppage