import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import {eventPurge} from './events'

export const startLogin = (email, password) => {
   return async (dispatch) => {

      const resp = await fetchSinToken('auth', { email, password }, 'POST');
      const body = await resp.json();
      if (body.ok) {
         localStorage.setItem('token', body.token);
         localStorage.setItem('token-init-date', new Date().getTime());
         dispatch(login({ uid: body.uid, name: body.name }))
      }
      else {
         let error = body.msg;
         if (body.error) {
            error = body.error.email ? body.error.email.msg : body.error.password.msg;
         }
         Swal.fire('Error', error, 'error');
      }
   }
}

export const startRegister = (name, email, password) => {
   return async (dispatch) => {
      const resp = await fetchSinToken('auth/new', { name, email, password }, 'POST');
      const body = await resp.json();
      if (body.ok) {
         localStorage.setItem('token', body.token);
         localStorage.setItem('token-init-date', new Date().getTime());
         dispatch(login({ uid: body.uid, name: body.name }))

      }
      else {
         let error = body.msg;
         if (body.error) {
            error = body.error.email ? body.error.email.msg : body.error.password.msg;
         }
         Swal.fire('Error', error, 'error');
      }
   }
}

export const startChecking = () => {
   return async (dispatch) => {
      const resp = await fetchConToken('auth/renew', {});
      const body = await resp.json();
      if (body.ok) {
         localStorage.setItem('token', body.token);
         localStorage.setItem('token-init-date', new Date().getTime());
         dispatch(login({ uid: body.uid, name: body.name }))

      }
      else {
         dispatch(checkingFinish());
      }
   }
}

export const startLogout = () => {
   return (dispatch)=>{
      localStorage.setItem('token', '');
      
      dispatch(logout());
      dispatch(eventPurge());
   }
}

const checkingFinish = () => {
   return {
      type: types.authCheckingFinish,
   }
}

const login = (user) => {
   return {
      type: types.authLogin,
      payload: user
   }
}

const logout = () => {
   return{
      type: types.authLogout
   }
}