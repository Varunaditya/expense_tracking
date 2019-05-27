<template>
    <div class="container">
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
        <div class="col-xl-8 offset-xl-2 text-center">
          <br>
          <button class="btn btn-success add fas fa-plus" @click="add_transaction">&nbsp;Add Transaction</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <br>
          <div class="list-group" v-for = 'item in transactions'
               @click="edit_transaction(item.description, item.date, item.price)">
            <a class="list-group-item list-group-item-action list-group-item-info text-center" style="cursor: pointer" >
              <b>{{item.description}} | {{item.date}} | ${{item.price}}</b></a><br>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import router from "../router"

  export default {
      name: "detail",
      data(){
        return {
          category: null,
          transactions: [],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          month_count: 0,
          current_month: null
        }
      },
      created() {
        this.category = this.$route.params.category;
        this.current_month = this.$route.params.month;
        this.month_count = this.months.indexOf(this.current_month);
        this.hinter();
      },
      mounted() {
      window.hinterXR = new XMLHttpRequest();
      this.hinter();
      },
      methods: {
        hinter(){
          let app = this;
          window.hinterXR.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
              let response = JSON.parse(this.responseText);
              app.transactions = response;
            }
          };
          window.hinterXR.open('GET', "http://13.59.234.163:5000/transactions?category=" + app.category + "&month=" + app.current_month, true);
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
        add_transaction(){
          router.push({name:'add', params: {category: this.category, month: this.current_month}});
        },
        edit_transaction(description, date, price){
          router.push({name:'edit', params: {description: description, date: date, price: price, category: this.category, month: this.month}});
        }
      }
    }
</script>

<style scoped>
.month{
  font-size: x-large;
  font-weight: bolder;
  cursor: pointer;
}
</style>
