<template>
<div>
    <router-view></router-view>
    <div class="appointment-entries">
        <div class="col-sm-7">
        <div class="panel panel-default">
            <div class="panel-heading">
            <h3>Appointments</h3>
            </div>
            <div class="panel-body">
            <div>
                <input class="form-control"   type="text" placeholder="appointment name" v-model="appointment.title"><br>                
                <textarea class="form-control"   type="text" placeholder="appointment detail" v-model="appointment.detail"></textarea><br>
                <input type="date" class="form-control" placeholder="appointment date" v-model="appointment.date"><br>
                <button class="btn btn-primary" v-on:click="addAppointment">Submit</button>
            </div>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
         <div class="appointment-entries">
         <p v-if="!appointmentsResult.length"><strong>No Appointments yet</strong></p>
         </div>
        <div class="list-group">
            <a href="#" class="list-group-item" v-for="appointment in appointmentsResult">
            <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-bullhorn"></i> {{ appointment.title }}</h4>
            <h5><i class="glyphicon glyphicon-calendar" v-if="appointment.date"></i> {{ appointment.date }}</h5>
            <p class="list-group-item-text" v-if="appointment.detail">{{ appointment.detail }}</p>
            <button class="btn btn-xs btn-danger" v-on:click="deleteAppointment(appointment)">remove appointment</button>
            </a>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
    import store from '../store'
    
    export default {
        data () {
         return {
            appointment: {
                title: "",
                detail: "",
                date: ""
            }
      }
        },
        methods: {
            addAppointment () {
                let appointments = this.appointment
                // We dispatch the appointment so it can be pushed
                // onto the appointments array
                if (Object.keys(appointments).length > 1) {
                    store.commit('appointmentUpdate', appointments);
                }
                this.appointment = {
                    title: "",
                    detail: "",
                    date: ""
                };
            },
            deleteAppointment (appointment) {
                if (window.confirm('Are you sure you want to delete this appointment?')) {
                    store.commit('deleteAppointment', appointment);
                }
            }
        },
        computed: {
            appointmentsResult(){      
            return store.state.appointments;
      }
    }
    }
</script>