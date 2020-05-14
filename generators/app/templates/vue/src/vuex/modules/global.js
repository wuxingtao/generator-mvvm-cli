export default {
    state: {
        isActive: false,
        templateFrom: 'mvvm-cli'
    },
    getters: {
        templateName: state => {
            return state.templateFrom;
        }
    },
    mutations: {
        UPDATE_APP_STATUS (state, data) {
            state.isActive = data;
        }
    },
    actions: {
        app_status_change ({ commit }, status) {
            debugger;
            commit('UPDATE_APP_STATUS', status);
        }
    }
};
