import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

   const dispatch = useDispatch();
   const {checking, uid} = useSelector(state => state.auth)

   useEffect(() => {
      dispatch(startChecking());
   }, [dispatch])

   if(checking){
      return <h5> Loading ... </h5>
   }

   return (
      <div>
         <HashRouter>
            <Switch>
               <PublicRoute
                  exact
                  path = '/login'
                  component = {LoginScreen}
                  isAuthenticated = {!!uid}
               />
               <PrivateRoute
                  exact
                  path = '/'
                  component = {CalendarScreen}
                  isAuthenticated = {!!uid}
               />
               <Redirect 
                  to= {'/'}
               />
            </Switch>
         </HashRouter>
      </div>
   )
}
