const { default: getOrdersFromServer } = require("./getOrders");
const { default: getUsersFromServer } = require("./getUsers");
const { default: getProdItems } = require("./getProdItmes");

const updateState = async (targetUpdate) => {
    switch (targetUpdate){
        case 'orders':
            await getOrdersFromServer();
            break;
        case 'users':
            await getUsersFromServer();
            break;
        case 'prod':
            await getProdItems();
    }
}

export default updateState