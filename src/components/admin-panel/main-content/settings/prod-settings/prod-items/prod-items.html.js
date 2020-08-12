const ProdItemsHtml = (prodItems) => {
    console.log('prodItems ', prodItems);
    const initial = '';
    const html = prodItems.reduce((accumHtml, prodItem) => {
        let html = `
            <div class="prod-item" data="${prodItem.id}">${prodItem.product}</div>
        `
        return accumHtml + html
    }, initial)

    return html
}

export default ProdItemsHtml