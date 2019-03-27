const state = {
    todoList: [
        {
            id: 1,
            name: 'Drink coffee',
            done: false,
            important: false,
        },
        {
            id: 2,
            name: 'Drink tea',
            done: false,
            important: false,
        },
        {
            id: 3,
            name: 'Go to school',
            done: false,
            important: false,
        },
    ],
    filters: [],
    lastId: 3,
}

const getters = {
    todoList: (state) => {
        let list = [...state.todoList];
        
        state.filters.forEach(filter => {
            list = list.filter(filter);
        });

        return list;
    },
}

// actions
const actions = {
    addItem ({ commit }, name) {
      commit('addItem', name);
    },

    deleteItem({ commit }, todo) {
        commit('deleteItem', todo);
    },

    toggleDone({ commit }, todo) {
        commit('toggleDone', todo);
    },

    toggleImportant({ commit }, todo) {
        commit('toggleImportant', todo);
    },

    setFilters({ commit }, filters) {
        commit('setFilters', filters);
    },
}

// mutations
const mutations = {
    addItem (state, name) {
        state.lastId += 1;

        state.todoList.push({
            id: state.lastId,
            name,
            done: false,
            important: false,
        });
    },
  
    deleteItem (state, { id }) {
        const index = state.todoList.findIndex((item) => item.id === id);
        state.todoList.splice(index, 1);
    },
  
    toggleDone (state, { id }) {
        const index = state.todoList.findIndex((item) => item.id === id);
        state.todoList[index].done = !state.todoList[index].done;
    },
  
    toggleImportant (state, { id }) {
        const index = state.todoList.findIndex((item) => item.id === id);
        state.todoList[index].important = !state.todoList[index].important;
    },
  
    setFilters (state, filters) {
        state.filters = filters;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}