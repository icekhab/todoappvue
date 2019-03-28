<template>
  <form @submit.prevent="submit">
    <b-input-group>
      <b-form-input 
        placeholder="Todo's name"
        aria-label="Todo's name"
        v-model="name"
      />
      <b-input-group-append>
        <b-button 
          type="submit" 
          variant="primary"
          >
          Add
        </b-button>
      </b-input-group-append>
    </b-input-group>
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
