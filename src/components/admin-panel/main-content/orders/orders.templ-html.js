import convertIndexToValue from "../../../../service/convertIndexToValue";

let ordersHtml = (currentOrder, user) => {
    let {onum, oname, cdate, edate, fdate, fullprice, currency, ostatus, itemprice, ocomments, tsession, osource} = currentOrder
    let {id, img, fname} = user;
    // console.log(currentOrder);
    // const ostatusValue = convertIndexToValue('ostatuslist', ostatus);
    // const sourceValue = convertIndexToValue('sourceorderlist', osource);
    // const typeSessionValue = convertIndexToValue('typesessionlist', tsession);
    // const prodItemsValue = convertIndexToValue('prodItems', itemprice, true);
    return`
<div class="order" id="order">
    <div class="order__inner">
        <div class="order__close" id="order-close"></div>
            <div class="order__top">
                <div class="order__top-wrap">
                <div class="order-title">Покупка #${onum}.</div>
                <div class="order__name-session">[${oname}]</div>
            </div>
            <div class="order__wrap-right">
            <div class="order-edit-btn" id="orderEditBtn">
                ✎
            </div>

            <div class="order-edit-btn" id="orderRemoveBtn">
            ✘
            </div>

            <div class="order__top-user" data-uid="${id}">

                <img class="order__top-userpic" src="../../../assets/image/templ-img/avatars/${img || '1595777852.png'}" alt="">
                <div class="order__top-username">${fname}</div>
            </div>
        </div>
        </div>
        <div class="order__info" id="orderInfoDetails">
   
            
     
        </div>
        <div class="order-download display-none">
            <div class="order-download__title">Материалы к выдаче</div>
            <div class="order-download__table">
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Состав</div>
                    <div class="order-download__table-info">Статус</div>
                    <div class="order-download__table-info">Дата</div>
                    <div class="order-download__table-info">Скачать</div>
                    <div class="order-download__table-info">Размер</div>
                </div>
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Фотографии Full</div>
                    <div class="order-download__table-info">Завершен</div>
                    <div class="order-download__table-info">Пт 10 Июл 22-41</div>
                    <div class="order-download__table-info">Архив</div>
                    <div class="order-download__table-info order-tabe__row-content">1 Mb</div>

                </div>
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Первые снимки</div>
                    <div class="order-download__table-info">Завершен</div>
                    <div class="order-download__table-info">Пт 10 Июл 22-41</div>
                    <div class="order-download__table-info">Архив</div>
                    <div class="order-download__table-info order-tabe__row-content">1 Mb</div>
                </div>
            </div>
        </div>
        <div class="order__gallery">
            <div class="order__gallery-title">
                <div class="order__gallery-itm" data-type="photo">Фото</div>
                <div class="order__gallery-itm" data-type="video">Видео</div>
                <div class="order__gallery-itm" data-type="location">Локация</div>
    
            </div>
                <div class="order__gallery-items" id="order-gallery-items" data-onum="${onum}">

                </div>
            </div>
        </div>
    </div>
</div>

`
}

export default ordersHtml