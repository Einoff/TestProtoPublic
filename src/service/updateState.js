import getListsItemData from "./getListsItemData";

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
            break;
        case 'list':
            await getListsItemData();
            break;
    }
}

export default updateState