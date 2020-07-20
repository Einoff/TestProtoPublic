const addOrdersHtml = () => {

return `<div class="add-orders">
    <div class="add-orders__btn-wrapp">
        <button type="button" class="add-orders__btn">Выбрать клиента</button>
        <button type="button" class="add-orders__btn">Добавить нового клиента</button>
    </div>
    <form action="" class="add-orders__form">
        <label for="" class="add-orders__label">
            Название фотосессии:
            <input type="text" class="add-o__input">
        </label>
        <label for="" class="add-orders__label">
            Дата создания:
            <input type="date" class="add-o__input">
        </label>
        <label for="" class="add-orders__label">
            Статус заказа:
            <select name="ostatus" id="" class="add-o__input">
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
        <label for="" class="add-orders__label">
            Вид съёмок:
            <select name="otype" id="" class="add-o__input">
                <option value="1">Выписка</option>
                <option value="2">Семейная</option>
                <option value="3">Свадьба</option>
                <option value="4">LoveStory</option>
                <option value="5">Коммерческая</option>
                <option value="6">Творческая</option>
                <option value="7">Репортаж</option>
            </select>
        </label>
        <label for="" class="add-orders__label">
            Источник заказа:
            <select name="otype" id="" class="add-o__input">
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
                <input id="id1" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id1" class="add-orders__price-lable">+ Съемка</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id2" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id2" class="add-orders__price-lable">+ Аренда студии</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id3" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id3" class="add-orders__price-lable">+ Макияж</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id8" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id8" class="add-orders__price-lable">+ Причёска</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id4" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id4" class="add-orders__price-lable">+ Проезд</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id5" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id5" class="add-orders__price-lable">+ Аренда оджеды</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id6" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id6" class="add-orders__price-lable">+ Фотокниги</label>
            </div>
            <div class="add-orders__price-btn">
                <input id="id7" type="checkbox" name="1" class="add-orders__price-item">
                <label for="id7" class="add-orders__price-lable">+ Сертификат на фотосесию</label>
            </div>
        </div>
        <label for="" class="add-orders__label">
            Добавить фото заказа:
            <input type="file" class="add-o__input">
        </label>

        <button class="add-orders__btn">Добавить</button>
    </form>
</div>
`
}

export default addOrdersHtml