import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import {  eventSetNonActive, eventStartAddNew, startEventUpdate } from '../../actions/events';

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
   }
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowplusone = moment().minutes(0).seconds(0).add(2, 'hours');

export const CalendarModal = () => {

   const [dateStart, setDateStart] = useState(now.toDate());
   const [dateEnd, setDateEnd] = useState(nowplusone.toDate());
   const [formValues, setFormValues] = useState({
      title: '',
      notes: '',
      start: now.toDate(),
      end: nowplusone.toDate(),
   });
   const { notes, title, start, end } = formValues;


   const { modalOpen } = useSelector(state => state.ui);
   const { activeEvent } = useSelector(state => state.calendar);
   const dispatch = useDispatch();
   useEffect(() => {
      if (activeEvent) {
         setFormValues(activeEvent)
      }
      else{
         setFormValues({
            title: '',
            notes: '',
            start: now.toDate(),
            end: nowplusone.toDate(),
         })
      }
   }, [activeEvent])

   const handleInputChange = ({ target }) => {
      setFormValues({
         ...formValues,
         [target.name]: target.value,
      })
   }


   const closeModal = () => {
      dispatch(uiCloseModal());
      dispatch(eventSetNonActive());
      setFormValues({
         title: '',
         notes: '',
         start: now.toDate(),
         end: nowplusone.toDate(),
      })
   }

   const handleStartDateChange = (e) => {
      setDateStart(e);
      setFormValues({
         ...formValues,
         start: e,
      })
   }

   const handleEndDateChange = (e) => {
      setDateEnd(e);
      setFormValues({
         ...formValues,
         end: e,
      })
   }

   const handleSubmitForm = (e) => {
      e.preventDefault();
      const momentStart = moment(start);
      const momentEnd = moment(end);

      if (momentStart.isSameOrAfter(momentEnd)) {
         return Swal.fire('Error', 'End date must be higher', 'error');
      }

      if (title.trim().length < 2) {
         return Swal.fire('Error', 'The title cannot be empty ', 'error')
      }

      if (activeEvent) {
         dispatch(startEventUpdate(formValues))
      }
      else {
         dispatch(eventStartAddNew(formValues));
      }


      setFormValues({
         title: '',
         notes: '',
         start: now.toDate(),
         end: nowplusone.toDate(),
      })
      closeModal();

   }

   return (
      <div>
         <Modal
            className='modal'
            overlayClassName='modal-fondo'
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={200}
         >
            <h1> {
               activeEvent ? 'Update Event' : 'New Event'
               
               } </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

               <div className="form-group">
                  <label>Date and start time</label>
                  <DateTimePicker
                     onChange={handleStartDateChange}
                     value={dateStart}
                     className='form-control'
                  />
               </div>

               <div className="form-group">
                  <label>Date and end time</label>
                  <DateTimePicker
                     onChange={handleEndDateChange}
                     value={dateEnd}
                     minDate={dateStart}
                     className='form-control'
                  />
               </div>

               <hr />
               <div className="form-group">
                  <label>Title and notes</label>
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Title of Event"
                     name="title"
                     autoComplete="off"
                     value={title}
                     onChange={handleInputChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">A little description</small>
               </div>

               <div className="form-group">
                  <textarea
                     type="text"
                     className="form-control"
                     placeholder="Notes..."
                     rows="5"
                     name="notes"
                     value={notes}
                     onChange={handleInputChange}
                  ></textarea>
                  <small id="emailHelp" className="form-text text-muted">Adicional Information</small>
               </div>

               <button
                  type="submit"
                  className="btn btn-outline-primary btn-block"
               >
                  <i className="far fa-save"></i>
                  <span> Save </span>
               </button>

            </form>

         </Modal>
      </div>
   )
}
