import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const {LoginHandler } = useAuth();
 

  useEffect(() => {
    (async () => {
      LoginHandler(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);


  function HandleLogin() {
    setLoginForm((form) => ({
      ...form,
      email: "testing@test.com",
      password: "test123",
    }));
    navigate('/products')
  }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
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
                <button className="button btn-secondary" onClick={()=>HandleLogin()}>Guest Login</button>
                <div>
                    <input type="checkbox" /> <lable> Remember me</lable> 
                </div>
                <p>Don't have an account ?<Link to='signup' className="primary-text"> SignUp</Link></p>
            </form>
        </div>
    </div>
  )
}
