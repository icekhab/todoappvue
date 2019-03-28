<template>
  <div class="filter-panel">
    <b-form-input 
      class="filter-panel__search"
      placeholder="Search todo"
      v-model="searchStr"
      @keyup="changeFilter"
    />

    <b-button
      class="filter-panel__btn btn"
      v-for="(item, index) in actionFilters"
      :variant="getActionFilterVariant(index)"
      :key="item.id"
      @click="changeActionFilter(item, index)"
      >
      {{item.name}}
    </b-button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'FilterPanel',
  data: function () {
    return {
      searchStr: '',
      selectedActionFilter: 0,
      actionFilters: [
        {
          id: 1,
          name: 'All',
        },
        {
          id: 2,
          name: 'Active',
          filter: item => !item.done,
        },
        {
          id: 3,
          name: 'Done',
          filter: item => item.done,
        },
      ],
    };
  },
  methods: {
    ...mapActions('todo', [
      'setFilters',
    ]),

    changeActionFilter: function(item, index) {
      this.selectedActionFilter = index;

      this.changeFilter();
    },

    changeFilter: function() {
      const filters = [];

      const actionFilter = this.getActionFilter();
      const searchByNameFilter = this.getSearchByNameFilter();

      actionFilter && filters.push(actionFilter);
      searchByNameFilter && filters.push(searchByNameFilter);

      this.setFilters(filters);
    },

    getActionFilterVariant: function(index) {
      const isSelected = index === this.selectedActionFilter;

      return isSelected ? "info" : "outline-info";
    },

    getSearchByNameFilter: function() {
      const searchStrLower = this.searchStr.toLowerCase();
      
      return searchStrLower ? 
        ((item) => {
          const name = item.name.toLowerCase();
          return name.includes(searchStrLower);
        }) : 
        null;
    },
    
    getActionFilter: function() {
      return this.actionFilters[this.selectedActionFilter].filter;
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.filter-panel {
    display: flex;
}

.filter-panel__search {
    flex-grow: 1;
}

.filter-panel__btn {
    margin-left: 4px;
}

</style>
