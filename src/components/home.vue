<template>
    <div>
      <div class="row">
        <div class="col-xl-8 offset-xl-2 text-center">
          <br>
          <span @click="get_current_month(-1)" class="month"><b><i class="fas fa-arrow-circle-left"></i></b></span>
          &nbsp;
          <span class="month">{{current_month}}</span>
          &nbsp;
          <span @click="get_current_month(1)" class="month"><b><i class="fas fa-arrow-circle-right"></i></b></span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 col-sm-7 col-lg-7 col-xl-6 offset-xl-1">
          <br><br>
          <div class="card-group col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xl-10 col-xl-offset-1">
            <div class="card col-sm-10 col-md-10 col-lg-10" id = "rentBg" @click="goToDetail('rent')">
              <div class="card-body">
                <h4 class="card-title"><i class="fas fa-home">&nbsp;<span style="font-family: Cambria;" >Rent</span></i></h4>
              </div>
            </div>
            <div class="card col-sm-2 col-md-2 col-lg-2 col-xl-4">
              <div class="card-body text-center">
                <span style="font-family: 'Segoe UI'; font-size: large"><b>${{rent}}</b></span>
              </div>
            </div>
          </div>
          <br>
          <div class="card-group col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xl-10 col-xl-offset-1">
            <div class="card col-sm-10 col-md-10 col-lg-10" id = "groceryBg" @click="goToDetail('grocery')">
              <div class="card-body">
                <h4 class="card-title"><i class="fas fa-shopping-cart">&nbsp;<span style="font-family: Cambria;" >Grocery</span></i></h4>
              </div>
            </div>
            <div class="card col-sm-2 col-md-2 col-lg-2 col-xl-4">
              <div class="card-body text-center">
                <span style="font-family: 'Segoe UI'; font-size: large"><b>${{grocery}}</b></span>
              </div>
            </div>
          </div>
          <br>
          <div class="card-group col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xl-10 col-xl-offset-1">
            <div class="card col-sm-10 col-md-10 col-lg-10" id = "fuelBg" @click="goToDetail('fuel')">
              <div class="card-body">
                <h4 class="card-title"><i class="fas fa-car" > Fuel</i></h4>
              </div>
            </div>
            <div class="card col-sm-2 col-md-2 col-lg-2 col-xl-4">
              <div class="card-body text-center">
                <span style="font-family: 'Segoe UI'; font-size: large" ><b>${{fuel}}</b></span>
              </div>
            </div>
          </div>
          <br>
          <div class="card-group col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xl-10 col-xl-offset-1">
            <div class="card col-sm-10 col-md-10 col-lg-10" id = "enterBg" @click="goToDetail('entertainment')">
              <div class="card-body">
                <h4 class="card-title"><i class="fas fa-film"> Entertainment</i></h4>
              </div>
            </div>
            <div class="card col-sm-2 col-md-2 col-lg-2 col-xl-4">
              <div class="card-body text-center">
                <span style="font-family: 'Segoe UI'; font-size: large"><b>${{entertainment}}</b></span>
              </div>
            </div>
          </div>
          <br>
          <div class="card-group col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xl-10 col-xl-offset-1">
            <div class="card col-sm-10 col-md-10 col-lg-10" id = "otherBg" @click="goToDetail('other')">
              <div class="card-body">
                <h4 class="card-title"><i class="fas fa-wallet"> Other</i></h4>
              </div>
            </div>
            <div class="card col-sm-2 col-md-2 col-lg-2 col-xl-4">
              <div class="card-body text-center">
                <span style="font-family: 'Segoe UI'; font-size: large"><b>${{other}}</b></span>
              </div>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xl-offset-2">
          <br><br><br><br><br>
          <ul class="list-group">
            <li class="list-group-item list-group-item-success" id="rentBg" v-bind:style="{width: rent_perc + '%'}"><b>Rent</b></li>
          </ul>
          <br>
          <ul class="list-group">
            <li class="list-group-item list-group-item-warning" id="groceryBg" v-bind:style="{width: grocery_perc + '%'}"><div><b>Grocery</b></div></li>
          </ul>
          <br>
          <ul class="list-group">
            <li class="list-group-item list-group-item-danger" id="fuelBg" v-bind:style="{width: fuel_perc + '%'}"><div><b>Fuel</b></div></li>
          </ul>
          <br>
          <ul class="list-group">
            <li class="list-group-item list-group-item-info"id="enterBg" v-bind:style="{width: entertainment_perc + '%'}"><div><b>Entertainment</b></div></li>
          </ul>
          <br>
          <ul class="list-group">
            <li class="list-group-item list-group-item-primary" id="otherBg" v-bind:style="{width: other_perc + '%'}"><div><b>Other</b></div></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import router from '../router';
export default {
  name: 'home',
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month_count: 0,
      current_month: null,
      rent: 0,
      grocery: 0,
      fuel: 0,
      entertainment: 0,
      other: 0,
      rent_perc: 50,
      grocery_perc: 50,
      fuel_perc: 50,
      entertainment_perc: 50,
      other_perc: 50,
      change_in_data: false,
      total: 0
    }
  },
  mounted() {
    window.hinterXR = new XMLHttpRequest();
    this.hinter();
  },
  created(){
    let d = new Date();
    this.month_count = d.getMonth();
    this.current_month = this.months[this.month_count];
    this.hinter();
  },
  methods: {
    hinter(){
      let app = this;
      window.hinterXR.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText);
          app.rent = response['rent'];
          app.grocery = response['grocery'];
          app.fuel = response['fuel'];
          app.entertainment = response['entertainment'];
          app.other = response['other'];
          app.total = app.rent + app.fuel + app.grocery + app.entertainment + app.other;
          app.get_category_percent(app.total);
        }
      };
      window.hinterXR.open('GET', "http://13.59.234.163:5000/load?name=varun&month=" + app.current_month, true);
      window.hinterXR.send();
    },
    get_current_month(step){
      this.month_count += step
      if (this.month_count < 0){
        this.month_count = 11;
      }
      this.current_month = this.months[this.month_count % 12];
      this.hinter();
    },
    get_category_percent(total){
      let em_padding = 35;
      let padding = 0;
      if(total > 0){
        this.rent_perc = ((this.rent / total) * 100) + padding;
        this.grocery_perc = ((this.grocery / total) * 100) + padding;
        this.fuel_perc = ((this.fuel / total) * 100) + padding;
        this.entertainment_perc = ((this.entertainment / total) * 100) + padding;
        this.other_perc = ((this.other / total) * 100) + padding;
      }
      else{
        this.rent_perc = em_padding;
        this.grocery_perc = em_padding;
        this.fuel_perc = em_padding;
        this.entertainment_perc = em_padding;
        this.other_perc = em_padding;
      }
    },
    goToDetail(category){
      router.push({name:'detail', params: {category: category, month: this.current_month}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#rentBg {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightseagreen;
}
#groceryBg {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightsalmon;
}
#fuelBg {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightcoral;
}
#enterBg {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightgreen;
}
#otherBg {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: lightskyblue;
}
  .bg{
    background-color: lightslategrey;
  }
.month{
  font-size: x-large;
  font-weight: bolder;
  cursor: pointer;
}
</style>
