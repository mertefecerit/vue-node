<template>
    <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="p-2 rounded bg-light shadow border">
                    <h6 class="text-center">Update Todo Form</h6>
                    <input type="text" v-model="todo.title" class="form-control">
                    <div class="d-flex justify-content-end mt-2 gap-2">
                        <button @click="this.$router.push('/')" class="btn btn-danger fw-bold">Geri</button>
                        <button @click="updateTodo" class="btn btn-success fw-bold"> Güncelle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todo:{
                _id: null,
                title: null
            }
        }
    },
    beforeMount(){
        const todo = this.$store.getters.getTodo(this.$route.params.id);
        this.todo.title = todo.title;
        this.todo._id = todo._id;
    },
    methods:{
        updateTodo(){
            this.$store.dispatch('updateTodo', this.todo).then(() => this.$router.push('/'));
        }
    }
}
</script>

