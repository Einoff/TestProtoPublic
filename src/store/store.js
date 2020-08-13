class Store {
    constructor(){
        this.state = {
            users:[],
            orders: [],
            who: {},
            prodItems: [],
            fetchUrl: {
                removeElUrl: `http://localhost:8080/api/backend/remove.php`,
                updateElUrl: `http://localhost:8080/api/backend/update-serv-el.php`
            }
        }
    }
    getState = () => {
        return this.state
    }
}

export default Store