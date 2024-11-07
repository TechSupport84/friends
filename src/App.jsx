import { useState } from 'react'
import './App.css'
import NavBar from './navigations/NavBar'
import HomePage from './pages/HomePage'
import Login from "./screens/Login"
import Register from './screens/Register'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (<AppRoutes/>)
}

export default App
