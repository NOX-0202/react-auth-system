import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignUp from './pages/signUp/SignUp'
import Login from './pages/Login/Login'
import Dash from './pages/Dash/Dash'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/Dash" exact component={Dash} />
        </BrowserRouter>
    )
}