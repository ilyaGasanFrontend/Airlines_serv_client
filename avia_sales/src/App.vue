<template>
  <div>

    <div class="wrapper">
    <Header_layout/>
      <div class="container_page title">
        <Section_title />
        <Form_serch style="z-index: 1;"/>
        <Datapicker/>

      </div>
    </div>
  </div>
</template>

<script>
import Header_layout from "./components/header.vue";
import Section_title from "./components/section_title.vue"
import Form_serch from "./components/section_sortfind.vue"
import Datapicker from "./components/test_datapicker.vue"
export default {
  components: {
    Header_layout,
    Section_title,
    Form_serch,
    Datapicker, 
  },
  // Other component options can go here
};
</script>

<style>
@import 'components/styles/css/main.css';
.title::before {
  position: absolute;
    content: url(public/city.png);
    right: -30rem;
    bottom: -27rem;
    overflow: hidden;
    border-radius: 50%;
}

.title::after {
  position: absolute;
    content: url(public/plane.png);
    left: -30rem;
    bottom: -51rem;
    overflow: hidden;
    border-radius: 50%;
    z-index: 0;
}
.form {
  z-index: 20;
}
</style>
