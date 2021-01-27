import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types"

export const eventStartAddNew = (event) => {
   return async(dispatch, getState) =>{
      const {uid,name} = getState().auth;
      try {
         const resp = await fetchConToken('events', event, 'POST');
         const body = await resp.json();
         if(body.ok){
            event.id = body.evento.id;
            event.user = {
               uid,
               name,
            }
            dispatch(eventAddNew(event));
         }
      } catch (error) {
         console.log(error)
      }
   }
}

const eventAddNew = (event)=>{
   return {
      type: types.eventAddNew,
      payload : event
   }
}

export const eventSetActive = (event)=>{
   return {
      type: types.eventSetActive,
      payload : event
   }
}

export const eventSetNonActive = (event)=>{
   return {
      type: types.eventSetActive,
      payload : event
   }
}

export const startEventUpdate = (event) => {
   return async(dispatch) =>{
      try {
         const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
         const body = await resp.json();
         if(body.ok){
            dispatch(eventUpdate(event));
         }
         else{
            Swal.fire('Error', body.msg, 'error');
         }
      } catch (error) {
         console.log(error)
      }
   }
}

const eventUpdate = (event)=>{
   return {
      type: types.eventUpdate,
      payload : event,
   }
}

export const startDeleteEvent = (event) => {
   return async(dispatch, getState) =>{
      const {id} = getState().calendar.activeEvent;
      try {
         const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
         const body = await resp.json();
         if(body.ok){
            dispatch(deleteEvent(event));
         }
         else{
            Swal.fire('Error', body.msg, 'error');
         }
      } catch (error) {
         console.log(error)
      }
   }
}

const deleteEvent = () =>{
   return{
      type: types.eventDelete,
   }
}

export const eventStartLoading = () => {
   return  async(dispatch) =>{
      try {
         const resp = await fetchConToken('events',{},'GET');
         const body = await resp.json();
         if(body.ok){
            const events = prepareEvents(body.eventos);
            dispatch(eventLoaded(events));
         }else{
            Swal.fire('Error', 'Unespected error, please reload the page', 'error');
         }
      } catch (error) {
         console.log(error)
      }
   }
}

const eventLoaded = (events) => {
   return {
      type:types.eventLoaded,
      payload: events
   }
}

export const eventPurge = () =>{
   return {
      type: types.eventPurge
   }
}