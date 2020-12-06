const prodSettingsHtml = () => {
    return`
        <div class="settings-item">
        <div class="settings-title">
            Настройки товаров:
        </div>
        <div class="settings-item__wrapp">
            <div class="settings-product prod-set" id="prodItems">
            
            </div>
            <div class="settings-product">
                <form class="product__add" id="addProdForm">
                    Имя продукта:
                    <input type="text" class="settings-add-input" name="proditem">
                    Цена:
                    <input type="text" class="settings-add-input" name="prodprice">
                    <div class="add__wrap">
                        <button class="add-product-btn" id="addProdBtn">Добавить</button>
                        <div class="add-check display-none">
                            &#10003;
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    `
}

export default prodSettingsHtml