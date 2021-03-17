<template>
  <div class="input-box">
    <input
      type="text"
      class="input-box-input"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
    />
    <button class="input-box-btn" @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoAdd",
  props: {
    todoId: Number,
  },
  setup(props, context) {
    return userEmitAddTodo(props.todoId, context.emit);
  },
};

function userEmitAddTodo(todoId, emit) {
  const todoContent = ref("");
  const emitAddTodo = () => {
    if (todoContent.value === "") {
      alert("待办事项不能为空");
      return;
    }
    const todo = {
      id: todoId,
      content: todoContent.value,
      completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
  };
  return {
    todoContent,
    emitAddTodo,
  };
}
</script>

<style scoped lang="scss">
.input-box {
  position: relative;
  display: flex;
  align-items: center;

  &-input {
    width: 100%;
    padding: 16px 52px 16px 18px;
    font-size: 16px;
    color: #626262;
    border: none;
    border-radius: 48px;
    outline: none;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  }

  &-btn {
    position: absolute;
    right: 0;
    width: 46px;
    height: 46px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(#c0a5f3, #7f95f7);
    border: none;
    border-radius: 50%;
    outline: none;

    .plus {
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 50% 2px, 2px 50%;
    }
  }
}
</style>
