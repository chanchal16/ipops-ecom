import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';


function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const {LoginHandler} = useAuth();
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    await LoginHandler(loginForm.email, loginForm.password); 
    navigate('/products')  
  }

  const HandleLogin=() =>{
    setLoginForm((form)=>({
      ...form,
      email: "testing@test.com",
      password: "test123",
    }));
  }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={ handleSubmit}>
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
                <button type='submit' className="button primary-btn">Login</button>
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