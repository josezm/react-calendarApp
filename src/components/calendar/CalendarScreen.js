import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { eventSetActive, eventSetNonActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';


const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

   const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
   const dispatch = useDispatch();
   const {events, activeEvent} = useSelector(state => state.calendar);
   const {uid} = useSelector(state => state.auth);

   useEffect(() => {
      dispatch(eventStartLoading())
   }, [dispatch])


   const onSelectEvent = (e) =>{
      dispatch(eventSetActive(e));
   }

   const onDoubleClick = () => {
      dispatch(uiOpenModal());
   }

   const onViewChange = (e) =>{
      setLastView(e);
      localStorage.setItem('lastView', e)
   }

   const onSelectedSlot = () => {
      dispatch(eventSetNonActive());
   }

   const eventStyleGetter = (event, start, end, isSelected) => {
      const style = {
         background: (uid === event.user._id) ? '#fa8231' : '#778ca3',
         // borderRadius: '10px',
         opacity: 0.6,
         display: 'block',
         color: 'white'
      }
      return {
         style
      }
   }

   return (
      <div className='calendar-screen'>
         <Navbar />
         <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            components={{ event: CalendarEvent }}
            onDoubleClickEvent = {onDoubleClick}
            onSelectEvent = {onSelectEvent}
            onView = {onViewChange}
            view = {lastView}
            onSelectSlot = {onSelectedSlot}
            selectable = {true}
         />

         <AddNewFab />

         {
            activeEvent &&
            <DeleteEventFab />}

         <CalendarModal />
      </div>
   )
}
