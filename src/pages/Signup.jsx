import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function Signup() {
    const [signUpForm,setSignUpForm] = useState({name:'',email:'',password:''})
    const { SignUpHandler} = useAuth();
    const navigate= useNavigate()

    useEffect(() => {
        (async () => {
            SignUpHandler(signUpForm.name,signUpForm.email, signUpForm.password);
          })();
    }, [signUpForm.name,signUpForm.email,signUpForm.password])

    const handleSignUp = ()=>{
        setSignUpForm((form)=>({
            ...form,
        }))
        // navigate('/')
    }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <h1 className="form-heading h5">Sign Up</h1>
                <div className="input-grp">
                    <label>Name</label>
                    <input type="text" className="input-field" value={signUpForm.name} required
                    onChange={(e)=>setSignUpForm((f)=>({...f,name:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" className="input-field" required
                    value={signUpForm.email} onChange={(e)=>setSignUpForm((f)=>({...f,email:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Password</label>
                    <input type="password" className="input-field" required
                    value={signUpForm.password} onChange={(e)=>setSignUpForm((f)=>({...f,password:e.target.value}))} />
                </div>
                <button type='submit' className="button primary-btn" onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account ?<Link to='/login' className="primary-text">Sign in</Link></p>
            </form>
        </div>
    </div>
  )
}
export {Signup}