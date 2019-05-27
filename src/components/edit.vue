<template>
  <div class="container">
    <br><br><br>
    <div class="row">
      <div class="col-xl-4 offset-xl-1 text-center">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-warning" type="button">Date</button>
          </div>
          <input v-model="date" required type="date" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-xl-4 offset-xl-1 text-center">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-info" type="button">Price</button>
          </div>
          <input v-model="price" required type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xl-9 offset-xl-1 text-center">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-danger" type="button">Description</button>
          </div>
          <input v-model="description" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xl-2  offset-xl-3 text-center" @click="update_transaction">
        <button class="btn btn-primary fas fa-edit" >&nbsp;<b>Update</b></button>
      </div>
      <div class="col-xl-2 offset-xl-1 text-center" @click="delete_transaction(1)">
        <button class="btn btn-danger fas fa-minus" >&nbsp;<b>Delete</b></button>
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
    import router from "../router"
    export default {
      name: "edit",
      data(){
        return {
          date: null,
          price: null,
          description: null,
          db_date: null,
          month: null,
          category: null,
          og_date: null,
          og_db_date: null,
          og_price: null,
          og_description: null,
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        }
      },
      created(){
        this.description = this.$route.params.description;
        this.og_description = this.description;
        this.price = this.$route.params.price;
        this.og_price = this.price;
        this.category = this.$route.params.category;
        this.db_date = this.$route.params.date;
        this.og_db_date = this.db_date;
        this.month = this.db_date.split(' ')[0];
        this.date = this.get_date(this.db_date);
      },
      mounted(){
        window.hinterXR = new XMLHttpRequest();
      },
      methods: {
        get_date(date){
          let temp_data = date.split(' ')
          let month = temp_data[0];
          month = '0' + (this.months.indexOf(month)  + 1).toString(10);
          let year = temp_data[2];
          let t_date = temp_data[1].split(',')[0];
          return year + '-' + month + '-' +t_date;
        },
        delete_transaction(change_page){
          let app = this;
          window.hinterXR.abort();
          window.hinterXR.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
              if(this.responseText == 'FAILED'){
                // alert('FAILED');
              }
              else{
                // alert('OK');
              }
              if(change_page != 0){
                router.push({name:'detail', params: {category: app.category, month: app.month}});
              }
            }
          };
          window.hinterXR.open('GET', "http://jenkins_docker:5000/delete?category=" +
            app.category +
            "&date=" +
            app.og_db_date + "&price=" +
            app.og_price + "&description=" +
            app.og_description, true);
          window.hinterXR.send();
        },
        update_transaction(){
          fetch("http://jenkins_docker:5000/update", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'description': this.description,
              'month': this.month,
              'price': this.price,
              'category': this.category,
              'date': this.date,
              'og_description': this.og_description,
              'og_price': this.og_price,
              'og_date': this.og_db_date})
          });
          router.push({name:'home'});
        }
      }
    }
</script>

<style scoped>

</style>
