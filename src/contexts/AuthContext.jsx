import React,{useState,createContext,useContext} from 'react'
import {LoginUser,SignUpUser} from '../services/auth'

const AuthContext = createContext();

 function AuthContextProvider({children}) {
  //  get the token and user from localstorage
  const loginToken = JSON.parse(localStorage.getItem("auth"));
  const localUser = JSON.parse(localStorage.getItem('users'));

  const [token, setToken] = useState(loginToken?.token);
  const [user, setUser] = useState([localUser]); 


  const LoginHandler = async (email, password) => {
    if (email && password !== '' ) {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await LoginUser(email, password);
        if (status === 200) {
          localStorage.setItem(
            "auth",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem('users',JSON.stringify([...user,foundUser]))
          setUser(foundUser);
        }
      } catch (error) {
        console.log("Error in while logging in", error);
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
            "auth",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem('users',JSON.stringify([...user,createdUser]))
          setUser(createdUser);
        }
      }
      catch (err){
        console.log('error while creating user',err)
      }
    }
  }
  const ProviderItem = {token,user,SignUpHandler,LoginHandler}
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