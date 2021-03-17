import { ref, computed } from 'vue'

export default function useTodos(todos) {
  const filter = ref('all')

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'uncompleted':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  })
  return {
    filter,
    filteredTodos
  }
}
