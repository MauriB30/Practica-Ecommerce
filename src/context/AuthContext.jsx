import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  
  function openLogin() {
    setShowLogin(true);
    setShowRegister(false);
  }

  function closeModal() {
    setShowLogin(false);
    setShowRegister(false);
    setError(false);
  }

  function switchModal() {
    setShowRegister(!showRegister);
    setShowLogin(!showLogin);
  }

  async function login(credentials) {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      const foundUser = users.find(user => 
        user.email.toLowerCase() === credentials.email.toLowerCase() && user.password === credentials.password
      );

      if (foundUser) {
        setUser(foundUser);
        console.log('Successful login: ', foundUser);
        closeModal();
      } else {
        setError(true);
        console.error('Incorrect credentials');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  }

  async function register(newUser) {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        ...newUser
      });
      console.log('Successful registration:', response.data);
    } catch (error) {
      console.error('Error in user registration:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ showLogin, showRegister, openLogin, register, login, closeModal, switchModal, user, setUser, error }}>
      {children}
    </AuthContext.Provider>
  );
}