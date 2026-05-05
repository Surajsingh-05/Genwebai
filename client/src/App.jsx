import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import useGetCurrentUser from './hooks/useGetCurrent'
export const serverUrl= "http://localhost:3000"



function App() { 
  useGetCurrentUser()
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
