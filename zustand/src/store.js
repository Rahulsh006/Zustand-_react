
import create from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
  todos: [],
  isLoading: false,
  error: null,

  fetchTodos: async () => {
    set({ isLoading: true })
    try {
      const response = await axios.get('https://dummyjson.com/todos')
      set({ todos: response.data.todos, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  
  deleteTodo: (id) => set((state) => ({ 
    todos: state.todos.filter((todo) => todo.id !== id) 
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  editTodo: (id, newText) => set((state) => ({
    todos: state.todos.map((todo) => 
      todo.id === id ? { ...todo, todo: newText } : todo
    )
  }))
}))

export default useStore