class Store {
    constructor(){
        this.state = {
            users:[],
            orders: [],
            who: {},
            prodItems: []
        }
    }
    getState = () => {
        return this.state
    }
}

export default Store