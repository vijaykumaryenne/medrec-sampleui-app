<<template>
  <div class="physicianslist">
    <div class="list-group">
            <a href="#" class="list-group-item" v-for="physician in physicians">
            <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-bullhorn"></i> Physician Name : {{ physician.FullName }}</h4>
            <h5><i class="list-group-item-text" ></i> Medical Speciality : {{ physician.MedicalSpeciality }}</h5>
            <p class="list-group-item-text" >Contact Details : </p>            
            </a>
        </div>
        <ul v-if="errors && errors.length">
          <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
  </div>    
</template>
<<script>
import {HTTP} from '../http-common';
export default {
  name: 'physicianslist',
  data: () => ({
      physicians: [],
      errors: []
  }),
  created() {
      HTTP.get('physicians')
      .then(response => {
        this.physicians = response.data.Physicians;
      })
      .catch(e => {
        this.errors.push(e)
      })      
  }
}
</script>

