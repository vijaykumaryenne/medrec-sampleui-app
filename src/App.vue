<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          MedRec App
        </a>
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/"><a>Home</a></router-link>
          <router-link tag="li" to="/time-entries"><a>Time Entries</a></router-link>
          <router-link tag="li" to="/appointment-entries"><a>Appointments</a></router-link>
          <router-link tag="li" to="/drugs-inventory"><a>Drugs Inventory</a></router-link>
          <router-link tag="li" to="/physicians-list"><a>Physicians List</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3"  v-if="$route.path == '/time-entries'">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-3"  v-else-if="$route.path == '/'">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-3"  v-else-if="$route.path == '/log-time'">
        <sidebar :time="totalTime"></sidebar>
      </div>      
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import store from './store';

export default {
  components: {'sidebar': Sidebar},
  computed: {
    totalTime() {
      return store.state.totalTime;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
