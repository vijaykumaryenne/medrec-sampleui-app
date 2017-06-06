import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    timeEntries: [],
    totalTime: 0,
    appointments:[],
  },
  mutations: {
    timeUpdate(state,timeEntry) {
      state.totalTime += Number(timeEntry.totalTime);
      state.timeEntries.push(timeEntry);
    },
    appointmentUpdate(state,appointment){
      state.appointments.push(appointment);
    },
    deleteTime(state,timeEntry) {
      let index = state.timeEntries.indexOf(timeEntry);
      state.timeEntries.splice(index, 1);
      state.totalTime -= timeEntry.totalTime;
    },
    deleteAppointment(state,appointment) {
      let index = state.appointments.indexOf(appointment);
      state.appointments.splice(index, 1);      
    }
  }
})

export default store