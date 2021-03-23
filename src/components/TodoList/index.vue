<template>
  <div class="todo-list">
    <todo-item
      v-for="(todo, i) in todos"
      :key="todo.Id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
      @delete-todo="$emit('delete-todo', i)"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoList/components/TodoItem/index.vue";
import { watch } from "vue";
export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  components: {
    TodoItem,
  },
  setup(props) {
    watch(props.todos, (val, preVal) => console.log(val));
    return {};
  },
};
</script>

<style scoped lang="scss">
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
