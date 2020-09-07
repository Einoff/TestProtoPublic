import { store } from "../index"

const convertIndexToValue = (tableName, id, isString = false) => {
    let table;

    if(isString && id){
        table = store.state[tableName];
        const idArray = id.split(',');
        const itemsValue = idArray.reduce((accum, id) => {
            let itemValue = table.find(item => item.id == id).product;
            return accum + itemValue + ' | '
        }, '')

        return itemsValue || ''
        
    }else if(!isString && id){
        table = store.getState().listsSetings[tableName];
        let itemName = '';
        table.find(item => {
            if(item.id == id){
                itemName = item.name
            }
        })
    
        return itemName || ''
        
    }else{
        return ''
    }
    
     

}

export default convertIndexToValue