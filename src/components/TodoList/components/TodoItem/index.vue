<template>
  <div class="todo-list-item" :class="{ done: todoItem.completed }">
    <label class="label">
      <input
        class="checkbox"
        :checked="todoItem.completed"
        type="checkbox"
        @click="$emit('change-state', $event)"
      />
      <div class="note">{{ todoItem.content }}</div>
      <span class="check-btn"></span>
    </label>
    <div class="delTodo" @click="$emit('delete-todo')">×</div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todoItem: {
      type: Object,
      require: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped lang="scss">
.todo-list-item {
  position: relative;
  padding: 16px;
  color: #626262;
  background: #fff;
  border-radius: 8px;

  .delTodo {
    position: absolute;
    top: 50%;
    right: 20px;
    display: none;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    transform: translateY(-50%);
  }

  &:hover {
    .delTodo {
      display: block;
      opacity: 1;
    }
  }

  &.done {
    .check-btn::after {
      opacity: 1;
    }

    .note {
      font-style: italic;
      text-decoration: line-through;
    }
  }

  .label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .note {
    user-select: none;
  }

  .checkbox {
    margin-right: 16px;
    opacity: 0;
  }

  .check-btn {
    position: absolute;
    top: 0;

    &::before {
      position: absolute;
      display: block;
      width: 18px;
      height: 18px;
      content: "";
      border: 1px solid #b382f9;
      border-radius: 50%;
    }

    &::after {
      position: absolute;
      display: block;
      width: 18px;
      height: 18px;
      content: "";
      background: #b382f9;
      border-radius: 50%;
      opacity: 0;
      transition: 0.4s;
      transform: translate(1px, 1px) scale(0.8);
    }
  }
}
</style>
