<template>
  <div class="filter">
    <div
      class="filter-item"
      :class="{ active: filter === item.value }"
      v-for="item in filters"
      :key="item.value"
      @click="$emit('change-filter', item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: {
    filter: {
      type: String,
      requires: true,
      default: () => "all",
    },
  },
  setup() {
    const filters = [
      {
        label: "全部",
        value: "all",
      },
      {
        label: "已完成",
        value: "completed",
      },
      {
        label: "未完成",
        value: "uncompleted",
      },
    ];
    return {
      filters,
    };
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  margin: 24px 2px;
  font-size: 14px;
  color: #c0c2ce;
  cursor: pointer;

  &-item {
    margin-right: 14px;
    transition: 0.8s;

    &.active {
      color: #6b729c;
      transform: scale(1.2);
    }
  }
}
</style>
