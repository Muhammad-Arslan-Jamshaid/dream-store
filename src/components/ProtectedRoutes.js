import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const user = localStorage.getItem('user')

const ProtectedRoutes = () => {
  return user ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes