class Store {
    constructor(){
        this.state = {
            users:[],
            orders: [],
            key: ''
        }
    }
    getState = () => {
        return this.state
    }
}

export default Store