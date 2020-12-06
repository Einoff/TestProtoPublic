const addOrdersHtml = (prodItems) => {
    const initial = '';
    let count = 1;
    const prodItemshtml = prodItems.reduce((accumHtml, item) => {
        let itemHtml = `            
        <div class="add-orders__price-btn">
            <input id="id${count}" type="checkbox" name="itemprice[]" value="${item.id}" class="add-orders__price-item">
            <label for="id${count++}" class="add-orders__price-lable">+ ${item.product}</label>
        </div>`
        return accumHtml + itemHtml
    }, initial)

    return `<div class="add-orders">
    <div class="add-orders__btn-wrapp" id="btn-wrapp">
        <button type="button" class="add-orders__btn" id="addUserBtn">Выбрать клиента</button>
        <button type="button" class="add-orders__btn" id="addNewUserBtn">Добавить нового клиента</button>
    </div>
    <div class="add-orders__users-list" id="allUsersInOrder"></div>
    <form class="add-orders__form" id="add-order">
        <!-- add users in order form -->
            <div class="add-orders__new-user display-none" id="newUsersInput">
                <input type="text" id="o-uname" name="fname" placeholder="Имя" class="add-users__input">
                <input type="text" name="lname" placeholder="Фамилия" class="add-users__input">
                <input type="text" id="o-uemail" name="email" placeholder="Почта (email)" class="add-users__input">
                <input type="text" name="login" placeholder="Логин" class="add-users__input">
                <input type="text" name="tel" placeholder="Телефон" class="add-users__input">
                <input type="text" name="pass" placeholder="Пароль" class="add-users__input">
                <input type="text" name="d-birth" placeholder="Дата рождения" class="add-users__input">
                <input type="text" name="inst" placeholder="Instagram" class="add-users__input">
                <input type="text" name="tcontact" placeholder="Тип контакта" class="add-users__input">
                <input type="text" name="tclient" placeholder="Категория клиента" class="add-users__input">
                <input type="text" name="address" placeholder="Адрес" class="add-users__input">
                <input type="text" name="ucontact" placeholder="общение в" class="add-users__input">
                <label for="t-area" class="t-area__label">
                    <span class="t-area__title">Дополнительная информация:</span>
                    <textarea name="ucomments" id="t-area" class="add-users__t-area"></textarea>
                </label>
                <label for="#" class="add-users__file-label">
                    <span class="t-area__file">Загрузить аватар:</span>
                    <input type="file" name="photo" class="add-users__file">
                </label>
            </div>

        <!-- orders form -->
        <input  id="order-input-id" type="hidden" name="id" placeholder="id" class="add-users__input" >

            <div class="add-orders__client">
                <div class="add-orders__client-photo">
                    <img src="" alt="" class="client-photo">
                </div>
                <div class="client-name">Клиент не выбран</div>
            </div>
        <label for="#" class="add-orders__label">
            Название фотосессии:
            <input name="oname" type="text" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Дата создания:
            <input name="cdate" type="date" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Дата события:
            <input name="edate" type="date" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Дата завершения:
            <input name="fdata" type="date" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Стоимость:
            <input name="fullprice" type="text" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Статус заказа:
            <select name="ostatus"  class="add-o__input" id="ostatuslist">

            </select>
        </label>
        <label for="#" class="add-orders__label">
            Вид съёмок:
            <select name="tsession"  class="add-o__input" id="typesessionlist">

            </select>
        </label>
        <label for="#" class="add-orders__label">
            Источник заказа:
            <select name="osource"  class="add-o__input" id="sourceorderlist">

            </select>
        </label>
        <div class="add-orders__price-title">
            Выбрать услуги:
        </div>
        <div class="add-orders__price">
            ${prodItemshtml}
        </div>
        <label for="t-area" class="t-area__label">
            <span class="t-area__title">Дополнительная информация:</span>
            <textarea name="ocomments" id="t-area" class="add-users__t-area"></textarea>
        </label>
        <label for="#" class="add-orders__label">
            Добавить фото заказа:
            <input name="oimg" type="file" class="add-o__input">
        </label>

        <button type="submit" class="add-orders__btn" id="add-order-btn">Добавить</button>
    </form>
</div>
`
}

export default addOrdersHtml