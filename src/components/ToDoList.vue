<template>
  <b-list-group class="todo-list">
    <b-list-group-item 
      class="todo-list__item" 
      v-for="item in todoList" 
      :key="item.id"
      >
      <ToDoItem :todo="item" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>

import ToDoItem from "./ToDoItem.vue"
import { mapGetters } from 'vuex'

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
  computed: {
    ...mapGetters('todo', {
      todoList: 'todoList',
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list__item {
    padding: .25rem .75rem;
    height: 40px;
}
</style>
