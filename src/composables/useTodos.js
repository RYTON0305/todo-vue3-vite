import { reactive, onMounted } from "vue";

export default function useTodos() {
  let todos = reactive([]);

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const fetchTodos = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rawTodos = await res.json();

    todos.push(
      ...rawTodos.map((todo) => ({
        id: todo.id,
        content: todo.title,
        completed: todo.completed,
      }))
    );
  };
  const deleteTodo = (todoIndex) => {
    todos.splice(todoIndex, 1);
  };
  onMounted(() => {
    fetchTodos();
  });
  return {
    todos,
    addTodo,
    deleteTodo,
  };
}
