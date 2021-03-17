<template>
  <main class="main">
    <div class="container">
      <h1 class="header">Vue 3 TODO</h1>
      <todo-add :todo-id="todos.length" @add-todo="addTodo"></todo-add>
      <todo-filter
        :filter="filter"
        @change-filter="filter = $event"
      ></todo-filter>
      <todo-list :todos="filteredTodos" @delete-todo="deleteTodo"></todo-list>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import TodoFilter from "../components/TodoFilter/index.vue";
import TodoAdd from "../components/TodoAdd/index.vue";
import TodoList from "../components/TodoList/index.vue";
import useTodos from "../composables/useTodos.js";
import useFilteredTodos from "../composables/useFilteredTodos.js";

export default {
  name: "Home",
  components: {
    TodoFilter,
    TodoAdd,
    TodoList,
  },
  setup() {
    const { todos, addTodo, deleteTodo } = useTodos();

    const { filter, filteredTodos } = useFilteredTodos(todos);

    return {
      todos,
      addTodo,

      filter,
      filteredTodos,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  background-color: rgb(203, 210, 240);
}

.container {
  width: 30%;
  min-width: 350px;
  padding: 48px 28px;
  background-color: #f5f6fc;
  border-radius: 24px;
  box-shadow: 0 0 24px rgba(0 0 0, 0.15);
}

.header {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
