import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import Home from '../Pages/Home'
import TandC from '../Pages/TandC'
import Privacy from '../Pages/Privacy'

function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tandc' element={<TandC/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoute
