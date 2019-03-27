<template>
  <form
        class="item-add-form input-group mb-3"
        @submit.prevent="submit"
      >
        <input
          type="text"
          class="form-control"
          placeholder="Todo's name"
          aria-label="Todo's name"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary"
            type="submit"
          >
            Add
          </button>
        </div>
  </form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'ItemAddForm',
  data: function() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions('todo', [
      'addItem',
    ]),

    submit: function() {
      if(this.name) {
        this.addItem(this.name);
      
        this.name = '';
      }
    },
  },
}

</script>
