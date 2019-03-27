<template>
  <div class="b-page">
    <div class="b-page-item">
      <Header />
    </div>
    <div class="b-page-item">
      <FilterPanel />
    </div>
    <div class="b-page-item">
      <ToDoList />
    </div>
    <div class="b-page-item">
      <ItemAddForm />
    </div>
  </div>
</template>

<script>

import Header from './Header.vue'
import FilterPanel from './FilterPanel.vue'
import ToDoList from './ToDoList.vue'
import ItemAddForm from './ItemAddForm.vue'

export default {
  name: 'ToDo',
  components: {
    Header,
    FilterPanel,
    ToDoList,
    ItemAddForm,
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-page {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
}

.b-page-item {
  margin-bottom: 10px;
}
</style>


