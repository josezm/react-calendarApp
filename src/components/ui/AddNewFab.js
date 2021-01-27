import React from 'react'
import { useDispatch } from 'react-redux'
import { eventSetNonActive } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

   const dispatch = useDispatch();

   const handleClickNew = () => {
      dispatch(eventSetNonActive());
      dispatch(uiOpenModal());
   }

   return (
      <button
         className = "btn btn-primary fab"
         onClick = {handleClickNew}
      >
         <i className = 'fas fa-plus'> </i>
         
      </button>
   )
}
