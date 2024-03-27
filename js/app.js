  const { createApp } = Vue

  createApp({
    data() {
      return {
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

    }
  }).mount('#app')
