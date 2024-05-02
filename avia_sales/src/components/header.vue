<template>
  <header>
    <nav class="navbar_center navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav_list collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav_el">
            <a class="links" href="#">Home </a>
          </li>
          <li class="nav_el">
            <a class="links" href="#">Features</a>
          </li>
          <li class="nav_el">
            <a class="links" href="#">Pricing</a>
          </li>
          <li class="nav_el">
            <a class="links" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    
</template>

<script>
export default {

}
</script>

<style scoped>
@import 'styles/css/header.css';
</style>