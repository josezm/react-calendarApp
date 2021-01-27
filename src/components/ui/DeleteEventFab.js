import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteEvent } from '../../actions/events';

export const DeleteEventFab = () => {

   const dispatch = useDispatch();

   const handleDelete = () => {
      dispatch(startDeleteEvent());
      // dispatch(eventSetNonActive());
   }

   return (
      <button className = 'btn btn-danger fab-danger' onClick = {handleDelete}>
         <i className = 'fa fas-trash'> </i>
         <span> Borrar Evento </span>
      </button>
   )
}
