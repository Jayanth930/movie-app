import React, { useEffect, useState } from "react"
import "./login.css"
import { Link  , useNavigate} from "react-router-dom"
import axios from "axios"
const Loginpage = ()=>{
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigator = useNavigate()
    const [navigate , setNavigate] = useState(false)
    const [message , setMessage ] = useState("")
    async function handleSubmit(e){
      e.preventDefault()
      console.log(process.env.REACT_APP_BACKEND_LINK)
      try {
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_LINK}/signin`,{
          email , password
        })
        console.log(result)
        if(result.data !== "Successfully logged In"){
          setMessage(result.data)
        }
        else{
          setNavigate(true)
        }
        
      } catch (err) {
        console.error(err.message)
      }
    }

    useEffect(()=>{
      if(navigate) navigator("/home")
    },[navigate])

    return (
      <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="social-text">{message}</p>
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
            <p></p>
            <Link to="/signup"  className="btn transparent" id="sign-up-btn">
              Sign up
            </Link>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

    )
}




export default Loginpage