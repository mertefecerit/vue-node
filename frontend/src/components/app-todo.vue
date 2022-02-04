<template>
    <div class="d-flex justify-content-between align-items-center bg-white border p-2 rounded my-2">
        <div>
            <input type="checkbox">
        </div>
        <div>
            <p class="mb-0">{{todo.title}}</p>
            <small>({{todo.createdAt}})</small>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-1">
            <button :value="todo._id" @click="updateOne" class="btn btn-sm fw-bold btn-primary">Edit</button>
            <button :value="todo._id" @click="deleteOne" class="btn btn-sm fw-bold btn-danger">Sil</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['todo'],
    methods:{
        updateOne(e){
            const id = e.target.value;
            this.$router.push('/update-todo/'+id);
        },
        deleteOne(e){
            const id = e.target.value;
            this.$store.dispatch('removeTodo', id)
        }
    }
}
</script>
