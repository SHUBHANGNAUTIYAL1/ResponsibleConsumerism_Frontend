import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Market from './Pages/Market'
import Login from './Pages/Login'

import Inventory from './Pages/Inventory'
import Clothings from './Pages/Clothings'
import Shoes from './Pages/Shoes'
import Chocolates from './Pages/Chocolates'
import Biscuits from './Pages/Biscuits'
import ConsentPage from './Pages/ConsentPage'
import Cart from './Pages/Cart'
import Questionnaire from './Pages/Questionnaire'
import Coffee from './Pages/Coffee'
import InformationSheet from './Pages/InformationSheet'
import LoginForm from './Pages/LoginForm'
import ThankYou from './Pages/Thankyou'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InformationSheet/>}/>
        <Route path="/consent" element={<ConsentPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/market" element={<Market />} />
        
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/cloths" element={<Clothings/>}/>
        <Route path="/tea" element={<Shoes/>}/>
        <Route path="/chocolates" element={<Chocolates/>}/>
        <Route path="/biscuits" element={<Biscuits/>}/>
        <Route path="/admin" element={<LoginForm/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/feed" element={<Questionnaire/>}/>
        <Route path="/coffee" element={<Coffee/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
