<template>
  <div class="container">
    <br><br><br>
    <div class="row">
      <div class="col-xl-4 offset-xl-1 text-center">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-warning" type="button">Date</button>
          </div>
          <input v-model="chosen_date" required type="date" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-xl-4 offset-xl-1 text-center">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-info" type="button">Price</button>
          </div>
          <input v-model="chosen_price" required type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
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
          <input v-model="chosen_description" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xl-9 offset-xl-1 text-center" @click="add_transaction">
        <button class="btn btn-success add fas fa-plus" >&nbsp;<b>ADD</b></button>
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
  import router from "../router"
    export default {
      name: "add",
      data(){
        return {
          month: null,
          category: null,
          chosen_date: null,
          chosen_price: null,
          chosen_description: null
        }
      },
      created(){
        this.month = this.$route.params.month;
        this.category = this.$route.params.category;
       },
      mounted(){
        window.hinterXR = new XMLHttpRequest();
      },
      methods: {
        add_transaction(){
          fetch("http://13.59.234.163:5000/add", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'description': this.chosen_description,
                                  'month': this.month,
                                  'price': this.chosen_price,
                                  'category': this.category,
                                  'date': this.chosen_date})
          });
          router.push({name:'detail', params: {category: this.category, month: this.month}});
        }
      }
    }
</script>

<style scoped>

</style>
