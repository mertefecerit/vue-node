import {createStore} from 'vuex';
import axios from 'axios';

const store = createStore({
    state : {
        todos: [],
    },
    getters: {
        getTodos(state){
            return state.todos;
        },
        getTodo: (state) => (id) => {
            return state.todos.find(todo => todo._id === id);
        }
    },
    mutations: {
        setTodos(state, todos){
            state.todos = todos;
        },
        deleteTodo(state, id){
            const todo = state.todos.find(todo => todo._id === id);
            const index = state.todos.indexOf(todo);
            state.todos.splice(index, 1);
        }
    },
    actions:{
        getTodosFromDatabase(context){
            const result = axios.get('http://localhost:3000/todos');
            result.then(response => {
                console.log(response.data.todos);
                context.commit('setTodos', response.data.todos)
            })

        },
        async addNewTodo(context ,todo){
           await axios.post('http://localhost:3000/todos',todo);
        },
        removeTodo(context, id){
            axios.delete('http://localhost:3000/todos/'+id)
            .then(() => {
                context.commit('deleteTodo', id);
            })
        },
        async getTodo(context, id){
            return await axios.get('http://localhost:3000/todos/'+id);
        },
        async updateTodo(context, payload){
           await axios.put('http://localhost:3000/todos/'+payload._id, payload);
        }
    }
});

export default store;