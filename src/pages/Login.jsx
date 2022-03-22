import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const {LoginHandler,token } = useAuth();
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    LoginHandler(loginForm.email, loginForm.password);
    
  }
  console.log('token',token)
  const HandleLogin=() =>{
    setLoginForm({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
    // navigate('/products')
  }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="form-heading h5">Log In</h1>
                <div className="input-grp">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" className="input-field" value={loginForm.email}
                    onChange={(e)=>setLoginForm((form)=>({...form,email:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Password</label>
                    <input type="password" className="input-field" value={loginForm.password}
                    onChange={(e)=>setLoginForm((form)=>({...form,password:e.target.value}))} />
                </div>
                <button type='submit' className="button btn-secondary">Login</button>
                <button className="button btn-secondary" onClick={()=>HandleLogin()}>Guest Login</button>
                <div>
                    <input type="checkbox" /> <label> Remember me</label> 
                </div>
                <p>Don't have an account ?<Link to='signup' className="primary-text"> SignUp</Link></p>
            </form>
        </div>
    </div>
  )
}
export {Login}