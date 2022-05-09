import React from 'react'
import {Navigate,Outlet,useLocation} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function RequireAuth() {
    const{user} = useAuth();
    const location = useLocation()
  if( user){
    return <Outlet/>
  } 
  return <Navigate to='/login' state={{from:location}} replace/>
}