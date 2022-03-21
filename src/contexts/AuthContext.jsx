import React,{useState,createContext,useContext} from 'react'
import {LoginUser,SignUpUser} from '../services/auth'

const AuthContext = createContext();

 function AuthContextProvider({children}) {
  //  get the token and user from localstorage
  const loginToken = JSON.parse(localStorage.getItem("login"));
  const registerToken = JSON.parse(localStorage.getItem('signup'))
  const localUser = JSON.parse(localStorage.getItem('user'));

  const [token, setToken] = useState(loginToken?.token);
  const [user, setUser] = useState([localUser]); 
  const[signupToken,setSignupToken] = useState(registerToken?.signupToken)

  const LoginHandler = async (email, password) => {
    if (email && password !== '' ) {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await LoginUser(email, password);
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem('user',JSON.stringify([...user,foundUser]))
          setUser(...foundUser);
        }
      } catch (error) {
        console.log("Error in login user", error);
      }
    }
  };

  const SignUpHandler = async(name,email,password)=>{
    if(name && email && password === ''){
      try{
        const {
          data: { createdUser, encodedToken },
          status,
        } = await SignUpUser(name,email, password);
        if (status === 201) {
          localStorage.setItem(
            "signup",
            JSON.stringify({ signupToken: encodedToken })
          );
          setSignupToken(encodedToken);
          localStorage.setItem('user',JSON.stringify([...user,createdUser]))
          setUser(...createdUser);
        }
      }
      catch (err){
        console.log('error while creating user',err)
      }
    }
  }
  const ProviderItem = {token,signupToken, SignUpHandler,LoginHandler, user}
  return (
    <div>
        <AuthContext.Provider value={ProviderItem}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
const useAuth = ()=>useContext(AuthContext)
export {AuthContextProvider,useAuth}