import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Devs from './pages/Devs'

export default function Routes() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={Login} />
         <Route path="/dev/:id" component={Devs} />
      </BrowserRouter>
   )
}