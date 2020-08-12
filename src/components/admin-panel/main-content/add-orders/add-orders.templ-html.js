const addOrdersHtml = () => {

return `<div class="add-orders">

    
    <div class="add-orders__btn-wrapp" id="btn-wrapp">
        <button type="button" class="add-orders__btn" id="addUserBtn">Выбрать клиента</button>
        <button type="button" class="add-orders__btn" id="addNewUserBtn">Добавить нового клиента</button>
    </div>
    <div class="add-orders__users-list" id="allUsersInOrder"></div>
    <form class="add-orders__form" id="add-order">
        <!-- add users in order form -->
            <div class="add-orders__new-user display-none" id="newUsersInput">
                <input type="text" name="fname" placeholder="Имя" class="add-users__input">
                <input type="text" name="lname" placeholder="Фамилия" class="add-users__input">
                <input type="text" name="email" placeholder="Почта (email)" class="add-users__input">
                <input type="text" name="tel" placeholder="Телефон" class="add-users__input">
                <input type="text" name="pass" placeholder="Пароль" class="add-users__input">
                <input type="text" name="d-birth" placeholder="Дата рождения" class="add-users__input">
                <input type="text" name="inst" placeholder="Instagram" class="add-users__input">
                <input type="text" name="tcontact" placeholder="Тип контакта" class="add-users__input">
                <input type="text" name="tclient" placeholder="Категория клиента" class="add-users__input">
                <input type="text" name="address" placeholder="Адрес" class="add-users__input">
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
            Стоимость:
            <input name="fullprice" type="text" class="add-o__input">
        </label>
        <label for="#" class="add-orders__label">
            Статус заказа:
            <select name="ostatus"  class="add-o__input">
                <option value="1">Новый</option>
                <option value="2">Подготовка</option>
                <option value="3">Съёмка проведена</option>
                <option value="4">В обработке</option>
                <option value="5">Готово к выдаче</option>
                <option value="6">Выдано</option>
                <option value="7">Выполнено и оплачено</option>
                <option value="8">Выполнено и оплачено</option>
                <option value="0">Отмена съёмки</option>
            </select>
        </label>
        <label for="#" class="add-orders__label">
            Вид съёмок:
            <select name="tsession"  class="add-o__input">
                <option value="1">Выписка</option>
                <option value="2">Семейная</option>
                <option value="3">Свадьба</option>
                <option value="4">LoveStory</option>
                <option value="5">Коммерческая</option>
                <option value="6">Творческая</option>
                <option value="7">Репортаж</option>
            </select>
        </label>
        <label for="#" class="add-orders__label">
            Источник заказа:
            <select name="osource"  class="add-o__input">
                <option value="1">Instagram</option>
                <option value="2">Уже клиент</option>
                <option value="3">По рекомендации</option>
                <option value="4">Звонок</option>
                <option value="5">Сайт</option>
                <option value="6">Реклама</option>
                <option value="7">Онлайн-чат</option>
            </select>
        </label>
        <div class="add-orders__price-title">
            Выбрать услуги:
        </div>
        <div class="add-orders__price">

            <div class="add-orders__price-btn">
                <input id="id1" type="checkbox" name="itemprice[]" value="8" class="add-orders__price-item">
                <label for="id1" class="add-orders__price-lable">+ Съемка</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id2" type="checkbox" name="itemprice[]" value="1" class="add-orders__price-item">
                <label for="id2" class="add-orders__price-lable">+ Аренда студии</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id3" type="checkbox" name="itemprice[]" value="2" class="add-orders__price-item">
                <label for="id3" class="add-orders__price-lable">+ Макияж</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id8" type="checkbox" name="itemprice[]" value="3" class="add-orders__price-item">
                <label for="id8" class="add-orders__price-lable">+ Причёска</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id4" type="checkbox" name="itemprice[]" value="4" class="add-orders__price-item">
                <label for="id4" class="add-orders__price-lable">+ Проезд</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id5" type="checkbox" name="itemprice[]" value="5" class="add-orders__price-item">
                <label for="id5" class="add-orders__price-lable">+ Аренда оджеды</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id6" type="checkbox" name="itemprice[]" value="6" class="add-orders__price-item">
                <label for="id6" class="add-orders__price-lable">+ Фотокниги</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id7" type="checkbox" name="itemprice[]" value="7" class="add-orders__price-item">
                <label for="id7" class="add-orders__price-lable">+ Сертификат на фотосесию</label>
            </div>
        </div>
        <label for="t-area" class="t-area__label">
            <span class="t-area__title">Дополнительная информация:</span>
            <textarea name="ocomments" id="t-area" class="add-users__t-area"></textarea>
        </label>
        <label for="#" class="add-orders__label">
            Добавить фото заказа:
            <input name="oimg" type="file" class="add-o__input">
        </label>

        <button type="button" class="add-orders__btn" id="add-order-btn">Добавить</button>
    </form>
</div>
`
}

export default addOrdersHtml