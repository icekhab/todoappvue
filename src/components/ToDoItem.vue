<template>
  <div class="todo-list-item">
        <span
          class="todo-list-item__text"
          :class="textClasses"
          @click="toggleDone(todo)"
          >
          {{ todo.name }}
        </span>
        <button
          type="button"
          class="todo-list-item__delete-btn btn btn-outline-danger"
          @click="deleteItem(todo)"
        >
          <i class="fas fa-trash-alt" />
        </button>
        <button
          type="button"
          class="todo-list-item__important-btn btn btn-outline-success"
          @click="toggleImportant(todo)"
        >
          <i class="fas fa-exclamation" />
        </button>
      </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'ToDoItem',
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions('todo', [
      'deleteItem',
      'toggleDone',
      'toggleImportant',
    ]),
  },
  computed: {
    textClasses: vm => ({
      'todo-list-item__text_done': vm.todo.done, 
      'todo-list-item__text_important': vm.todo.important,
    }),
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list-item {
    display: flex;
    align-content: center;
}

.todo-list-item__text {
    width: 100px;
    align-self: center;
    flex-grow: 1;
    cursor: pointer;
}

.todo-list-item__delete-btn {
    padding: 4px 9px;
    font-size: 14px;
}

.todo-list-item__important-btn {
    padding: 4px 12px;
    font-size: 14px;
    margin-left: 5px;
}

.todo-list-item__text_done {
    text-decoration: line-through;
}

.todo-list-item__text_important {
    font-weight: bold;
    color: deepskyblue;
}
</style>
