<template>
    <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="p-2 rounded bg-light shadow border">
                    <h6 class="text-center">New Todo Form</h6>
                    <input v-model="title" type="text" placeholder="New Todo" class="form-control">
                    <div class="d-flex justify-content-end mt-2">
                        <button @click="addTodo" class="btn btn-danger fw-bold">Kaydet</button>
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
            title: null,
        }
    },
    methods:{
        addTodo(){
            const newTodo = {
                title: this.title
            }
            this.$store.dispatch('addNewTodo',newTodo)
                .then(() => this.$router.push('/'));

        }
    }
}
</script>

