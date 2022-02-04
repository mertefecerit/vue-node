<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-4">
            <div class="p-2 rounded bg-light shadow border my-3">
            <h3>Todos</h3>
            <hr>
            <appTodos :todos=todos />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import appTodos from '../components/app-todos.vue';

export default {
  name: 'App',
  computed:{
    todos(){
      return this.$store.getters.getTodos;
    }
  },
  components:{
    appTodos
  },
  beforeMount(){
    this.$store.dispatch('getTodosFromDatabase');
  }
}
</script>