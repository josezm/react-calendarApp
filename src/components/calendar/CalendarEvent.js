import React from 'react'

export const CalendarEvent = ({event}) => {
   return (
      <div>
         <span> {event.title} </span>
         <b> - {event.user.name} </b>
      </div>
   )
}
