<template>
   <div class="app-header">
        <h1 class="app-header__text">My Todo list</h1>
        <span class="app-header__todo-counts">
            {{todoCount}} more to do, {{doneCount}} done
        </span>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Header',
  
  computed: {
    ...mapState({
      todoList: state => state.todo.todoList
    }),

    todoCount: vm => vm.todoList.length,
    doneCount: vm => vm.todoList.filter(item => item.done).length,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
    display: flex;
    justify-content: space-between;
}

.app-header__text {
    font-size: 35px;
    font-weight: bold;
}

.app-header__todo-counts {
    align-self: flex-end;
    margin-bottom: 0.5em;
    color: gray;
}
</style>
