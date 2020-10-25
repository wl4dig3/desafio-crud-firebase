<template>
  <div id="app" class="container">
    <div class="text-center mt-5">
      <router-link :to="{name: 'Home'}">
        <img src="@/assets/tareas.jpg" alt="">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
