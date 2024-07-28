import React from 'react'
import Login from './Login'
import Register from './Register'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function AuthModal() {
  const { showLogin, showRegister } = useContext(AuthContext)
  
  return (
    <>
      {showLogin && <Login />}
      {showRegister && <Register />}
    </>
  );
}
