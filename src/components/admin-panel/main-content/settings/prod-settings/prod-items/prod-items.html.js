const ProdItemsHtml = (prodItems) => {
const initial = '';
const html = prodItems.reduce((accumHtml, prodItem) => {
let html = `
<div class="prod-item" data-id="${prodItem.id}">
    <div class="prod-item__name">${prodItem.product}</div>

    <div class="prod-item__wrapp">
        <div class="prod-item__price">${prodItem.price} UAH</div>
        <div class="prod-item__btn" id="p-i-edit">&#9998;</div>
        <div class="prod-item__btn" id="p-i-close">&#10008;</div>
    </div>
    <div class="prod-item__inputs display-none" data-id="${prodItem.id}">
        <form class="prod-item__inputs-wrapp prodFormJs">
            <input type="hidden" class="prod-item__input" name="id" value="${prodItem.id}">
            <input type="text" class="prod-item__input" name="prod" placeholder="название">
            <input type="text" class="prod-item__input" name="price" placeholder="цена">
            <button class="prod-item__edit">Изменить</button>
            <div class="prod-item__edit-close" id="prodEditClose">&#10008;</div>
        </form>
        <div class="prod-item__edit-bg"></div>
    </div>
</div>
`
return accumHtml + html
}, initial)

return html
}

export default ProdItemsHtml