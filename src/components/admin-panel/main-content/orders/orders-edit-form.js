const { default: Component } = require("../../../../core/Component");
const { store } = require("../../../..");

class OrdersEditForm extends Component {
    constructor(id, currentOrders){
        super(id)
        this.insertHTML(html(currentOrders));
    }
}

const html = (currentOrders) => {
    let {onum, oname, cdate, edate, fdate, fullprice, currency, ostatus, itemprice, ocomments, tsession, osource} = currentOrders;
    return `

    <form class="order__info-wrap" id="orderEditFormId">
        <div class="order__info-photo">
            <img src="https://e-literaci.pl/upload/1580728826.jpg" alt="" class="order__info-img">
        </div>
        <div class="order__info-details">
            <div class="order__info-details-row">
                <div class="order__info-details-name">Продукт:</div>
                <div class="order__info-details-value">
                <input type="text" name="oname" value="${oname}" class="orderEditInput" disabled>
                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Тип фотосесси:</div>
                <div class="order__info-details-value">
                    <select name="tsession" id="typesessionlist"  class="orderEditInput" disabled>
                        <option value="">${tsession || ''}</option>
                    </select>
                    <!-- <input type="text" name="tsession" value="${tsession || ''}" class="orderEditInput" disabled> -->
                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Источник:</div>
                <div class="order__info-details-value">
                    <select name="osource" id="sourceorderlist"  class="orderEditInput" disabled>
                        <option value="">${osource || ''}</option>
                    </select>
                    <!-- <input type="text" name="osource" value="${osource || ''}" class="orderEditInput" disabled> -->

                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Дата создания:</div>
                <div class="order__info-details-value">
                    <input type="text" name="cdate" value="${cdate || ''}" class="orderEditInput" disabled>

                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Дата события:</div>
                <div class="order__info-details-value">
                    <input type="text" name="edate" value="${edate || ''}" class="orderEditInput" disabled>

                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Дата завершения:</div>
                <div class="order__info-details-value">
                    <input type="text" name="fdate" value="${fdate || ''}" class="orderEditInput" disabled>

                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Статус:</div>
                <div class="order__info-details-value">
                    <select name="ostatus" id="ostatuslist"  class="orderEditInput" disabled>
                        <option value="">${ostatus || ''}</option>
                    </select>
                    <!-- <input type="text" name="ostatus" value="${ostatus || ''}" class="orderEditInput" disabled> -->

                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Стоимость, ${currency}:</div>
                <div class="order__info-details-value">
                    <input type="text" name="fullprice" value="${fullprice || ''}" class="orderEditInput" disabled>
                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Товары:</div>
                <div class="order__info-details-value">
                    ${itemprice}
                </div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Комментарии:</div>
                <div class="order__info-details-value">
                    <input type="text" name="ocomments" value="${ocomments}" class="orderEditInput" disabled>
                </div>
            </div>
            <div class="order__info-details-row display-none" id="orderEditImg">
                <div class="order__info-details-name">Изображение:</div>
                <div class="order__info-details-value">
                    <input type="file" name="oimg">
                </div>
            </div>
            <button class="order-edit-submit display-none" id="orderEditSubmit">Изменить</button>
        </div>
        
    </form>
    `
}

export default OrdersEditForm