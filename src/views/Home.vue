<template>
  <div>
    <h1 class="my-3">Lista de tareas</h1>
    <router-link :to="{name: 'Agrega'}">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" 
      v-for="item of tareas" :key="item.id">
        {{item.id}} - {{item.nombre}}
        <div class="float-right">
          <router-link class="btn btn-warning btn-sm mr-2" 
          :to="{name: 'Edita', params:{ id: item.id}}">
            Editar
          </router-link>
          <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>  
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  methods:{
    ...mapActions(['getTareas','eliminarTarea'])
  },
  created(){
    this.getTareas()
  },
  computed:{
    ...mapState(['tareas'])
  }
}
</script>
