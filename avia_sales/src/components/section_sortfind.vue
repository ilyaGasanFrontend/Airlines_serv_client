<template>
    <section class="section_title">
        <div class="container_section">
            <div class="wrapper_content_center">
                <h1>Lets find flight together</h1>
                <div class="groupe_serch_wrapper">
                   <ul class="list_classes">
                    <li class="el_list " :class="{active: active_el === 'pl'}" @click="toogleStatus('pl')" value="plane">
                        <p>plane</p> 
                    </li>
                    <li class="el_list" :class="{active: active_el === 'ho'}" @click="toogleStatus('ho')" value="hotels">
                        <p>hotels</p> 
                    </li>
                    <li class="el_list" :class="{active: active_el === 'ab'}" @click="toogleStatus('ab')" value="about">
                        <p>about country</p>
                    </li>
                   </ul>
                </div>
                <Plane_form v-if="active_el=== 'pl'"/>
            </div>

        </div>
    </section>
</template>

<script>
import Plane_form from "./form_plane.vue"
export default {

    components: {
        Plane_form
    },
    data() {
        return {
            active_el: 'pl'
        };
    },
    methods: {
        toogleStatus(selected) {
            this.active_el = selected
        }
    }
}
</script>

<style scoped>
@import 'styles/css/section.css';
@import 'styles/css/serchform.css';
</style>