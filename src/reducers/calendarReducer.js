import { types } from "../types/types";

// {
//    id: 108712871398,
//    title: 'Evento 1',
//    start: moment().toDate(),
//    end: moment().add(2, 'hours').toDate(),
//    notes: 'Comprar cosas',
//    user: {
//       uid: '123',
//       name: 'Jose',
//    }
// },

const initialState = {
   events: [],
   activeEvent: null,

}

export const calendarReducer = (state = initialState, action) => {
      switch (action.type) {
         case types.eventAddNew :
            return {
            ...state,
            events: [...state.events, action.payload]
         }
         case types.eventSetActive:
            return{
               ...state,
               activeEvent: action.payload,
            }
         case types.eventSetNonActive:
            return{
               ...state,
               activeEvent: null,
            }
         case types.eventUpdate:
            return{
               ...state,
               events: state.events.map( e => {
                  if(e.id === action.payload.id){
                     return e = action.payload;
                  }
                  else{
                     return e;
                  }
               })
            }
            case types.eventDelete:
               return{
                  ...state,
                  events: state.events.filter( e => (
                     e.id !== state.activeEvent.id
                  )),
                  activeEvent:null,
               }
            case types.eventLoaded:
               return {
                  ...state,
                  events: [...action.payload]
               }
            case types.eventPurge:
               return{
                  events: [],
                  activeEvent: null,
               }
         default:
            return state;
      }
   
}
