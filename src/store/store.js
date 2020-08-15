class Store {
    constructor(){
        this.state = {
            users:[],
            orders: [],
            who: {},
            prodItems: [],
            fetchUrl: {
                removeElUrl: `http://localhost:8080/api/backend/remove.php`,
                updateElUrl: `http://localhost:8080/api/backend/update-serv-el.php`,
                addUser: 'http://localhost:8080/api/backend/addusers.php',
                addOrder: 'http://localhost:8080/api/backend/addorder.php',
                addProdItem: 'http://localhost:8080/api/backend/addProdItem.php',
                getAuthUserData: `http://localhost:8080/api/backend/getAuthUserData.php`,
                getOrders: `http://localhost:8080/api/backend/getorders.php`,
                getProdItems: `http://localhost:8080/api/backend/getProdItems.php`,
                getUsers: `http://localhost:8080/api/backend/getUsers.php`
            }
        }
    }
    getState = () => {
        return this.state
    }
}

export default Store