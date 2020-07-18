const store = {
    state: {
        users:[]
    },

    getState(){
        return this.state
    }
}

export default store
window.store = store;