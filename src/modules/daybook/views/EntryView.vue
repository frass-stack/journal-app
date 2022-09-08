<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
          <div>
              <span class="text-success fs-5 fw-bold">{{ day }}</span>
              <span class="mx-1 fs-3">{{ month }}</span>
              <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
          </div>
          <div>
              <input type="file" @change="onSelectedFile" ref="selectorImage" v-show="false" accept="image/png, image/jpeg"/>
              <button 
                v-if="entry.id" 
                @click="onToDelete"
                class="btn btn-danger mx-2">
                  Borrar
                  <i class="fa fa-trash-alt"></i>
              </button>
              <button class="btn btn-primary" @click="onSelectedImage">
                  Subir Foto
                  <i class="fa fa-upload"></i>
              </button>
          </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
          <textarea v-model="entry.text" >¿Cual es la historia de hoy?</textarea>
        </div>
        <Fab @on:click="saveEntry" icon="fa-save"/>
        <img
          v-if="entry.picture && !localImage" 
          :src="entry-picture" 
          alt="entry-picture"
          class="img-thumbnail">
        <img 
        v-if="localImage"
        :src="localImage" 
        alt="entry-picture"
        class="img-thumbnail">
    </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import uploadImage from '@/modules/daybook/helpers/uploadImage'

import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'

export default {
    props:{
        id:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    components:{
        Fab: defineAsyncComponent( ()=> import('@/modules/daybook/components/Fab.vue') )
    },
    computed:{
        ...mapGetters('journal', ['getEntryById']),
        day(){
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month(){
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay(){
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }
    },
    methods:{
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
        loadEntry(){
            let entry;
            if( this.id === 'new'){
                entry = {
                    text:'',
                    date: new Date().getTime()
                }
            }else{
                entry = this.getEntryById(this.id);
                //console.log(entry)
                if( !entry ) return this.$router.push({ name: 'no-entry' })
            }
            this.entry = entry
        },
        async saveEntry(){
            new Swal({
                title:'Espere por favor',
                allowOutsideClick:false
            })

            Swal.showLoading()

            //Obtenemos la imagen que deseamos cargar.
            const picture = await uploadImage( this.file )

            //Cargamos la imagen en la entrada.
            this.entry.picture = picture

            //console.log('Guardando entrada')
            if( this.entry.id ){
                this.updateEntry( this.entry )
            }else{
                //Crear una nueva entrada
                //console.log('creando nueva entrada.')
                //Obtenemos el id para redireccionar a la nueva entrada.
                const id = await this.createEntry( this.entry )
                this.$router.push({ name:'entry', params:{ id }})
            }
            this.file = null
            Swal.fire('Guardado', 'Entrada registrada con exito', 'success')
        },
        async onToDelete(){

            const { isConfirmed } = await Swal.fire({
                title: '¿Esta seguro?',
                text: 'una vez borrado, no se podra recuperar.',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro.'
            })

            if( isConfirmed ){
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                //console.log('Borrando', this.entry)
                await this.deleteEntry(this.entry.id)
                this.$router.push({ name:'no-entry' })

                Swal.fire('Eliminado', '', 'success')
            }
        },
        onSelectedFile( event ){
            const file = event.target.files[0]
            if( !file ){
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )
        },
        onSelectedImage(){
            this.$refs.selectorImage.click()
        }
    },
    created(){
        //console.log(this.$route.params.id)
        this.loadEntry()
    },
    watch:{
        id(){
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>