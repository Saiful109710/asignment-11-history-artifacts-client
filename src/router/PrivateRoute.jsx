import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading) return <LoadingSpinner></LoadingSpinner>
    if(!user){
        return <Navigate state={location?.pathname}  to='/login'></Navigate>
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute
