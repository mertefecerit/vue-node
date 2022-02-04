<template>
    <appTodo :todo=todo v-for="todo in todos" :key="todo" /> 
</template>

<script>
import appTodo from './app-todo.vue';
export default {
    props:['todos'],
    components:{
        appTodo
    }
}
</script>