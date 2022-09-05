<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2022, Jueves</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir Foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea >¿Cual es la historia de hoy?</textarea>
  </div>
  <Fab />
  <img 
    src="https://i0.wp.com/lamazmorradelfriki.com/wp-content/uploads/2022/07/Galadriel-and-Elrond-in-The-Rings-of-Power.jpg?resize=780%2C470&ssl=1" 
    alt="entry-picture"
    class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab: defineAsyncComponent( ()=> import('@/modules/daybook/components/Fab.vue') )
    }
}
</script>

<style>

</style>