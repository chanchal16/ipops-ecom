import axios from "axios";

const SignUpUser = (name,email,password)=>{
        return axios.post('/api/auth/signup',{
            name,
            email,
            password,
            
        })
   
}

const LoginUser = (email,password)=>{
    return axios.post("api/auth/login",{email,password})
}
export {SignUpUser,LoginUser}