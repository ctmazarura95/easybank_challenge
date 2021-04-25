import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import MainPage from './MainPage'
import Banking from './Banking'
import Budgeting from  './Budgeting'
import Onboarding  from  './Onboarding'
import OpenApi from './OpenApi'
import Header from './Header'


const Container = () => {
    return (
        <>
               

            <Router>
            <Header/>

            <Route path="/" component={MainPage} exact/>
            <Route path="/banking" component={Banking}/>
            <Route path="/budgeting" component={Budgeting}/>
            <Route path="onboarding" component={Onboarding}/>
            <Route path="/openapi" component={OpenApi}/>

            </Router>
            
        </>
    )
}

export default Container
