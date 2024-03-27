  const { createApp } = Vue

  createApp({
    data() {
      return {
        todoInput: '',
        todos: [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Allenamento',
                done: true
            },
            {
                text: 'Fare la todo list',
                done: true
            },
        ]
      }
    },
    methods: {
        addTodo() {
            if (this.todoInput !== '') {
                const newTodo = {
                    text: this.todoInput,
                    done: false
                }
                this.todos.push(newTodo)
            
            // svuota l'input
            this.todoInput = ''
            }
        }
    }
  }).mount('#app')
