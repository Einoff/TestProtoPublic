

//  const getOrderItemsHtml = (orders) => {
//     // let orders = store.getState().orders;
//     const initial = '';

//     if (orders.length > 0) {
//         let orderItemHtml = orders.reduce((accumHtml, order) => {
//             let html = `
//                 <div class="list-of-order" id="l-order">
//                 <div class="order-item" data-id="${order.id}">
//                     <div class="order-item__photo-wrapp">
//                         <img src="../../../../assets/image/templ-img/avatars/${order.oimg}" alt="photo-session"
//                             class="order-item__photo">
//                     </div>
//                     <div class="order-item__content-block">
//                         <div class="order-item__text">Покупка: <span>${order.onum}</span></div>
//                         <div class="order-item__text">Название сессии: <span>${order.oname}</span></div>
//                         <div class="order-item__text">Дата создания: <span>${order.onum}</span></div>
//                         <div class="order-item__text">Статус: <span>Новый</span></div>
//                     </div>
//                 </div>
//             </div>
//             `
//             return accumHtml + html
//         }, initial)

//         return orderItemHtml
//     } else {
//         console.log('заказов не найдено!');
//     }

// }