<template>
<div class="bg">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><span style="font-size: larger"><i class="fas fa-dollar-sign"></i></span>&nbsp<span style="font-size: larger"><b>Expense Manager</b></span></a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/"><b>Home</b> <span class="sr-only">(current)</span></a>
        </li>

      </ul>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightslategrey;
}
  .bg{
    background-color: lightgrey;
  }
</style>
