<template>
  <ul class="todo-list list-group">
    <li 
      class="todo-list__item list-group-item" 
      is="ToDoItem"
      v-for="item in todoList" 
      :todo="item"
      :key="item.id">

    </li>
  </ul>
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
