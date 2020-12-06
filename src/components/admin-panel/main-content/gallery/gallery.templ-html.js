
const galleryHtml = (onum, store) => {
    const galleryItems = store.getState().galleryData;
    const currentGalleryImgUrl = galleryItems.find(item => item.id === onum);
    let galleryItemsHtml = '';

    if (currentGalleryImgUrl && currentGalleryImgUrl.gallery != '') {
        galleryItemsHtml = currentGalleryImgUrl.gallery.reduce((accum, itemR) => {
            return `
                ${accum}
                <div class="gallery__item-img-w">
                    <div class="gallery__item-img-check">
                        <input type="checkbox" name="gimgsingl[]" class="select-img-js" data-img="${itemR}">
                    </div>
                     <img src="./assets/image/orders/${onum}p/${itemR}" alt="gallery-img" class="gallery__item-img">
                </div>
            `
        }, '')
    }


    return `
        <div class="gallery">
            <form class="gallery-form" id="addGalleryImgForm">
                <input type="file" name="gimg[]" multiple>
                <input type="hidden" name="onum" value="${onum}">
                <button class="gallery__addimg-btn" id="order-gallery-submit" data-onum="">Добавить</button>
            </form>

            <form class="gallery__item" id="galleryWrap" data-onum="${onum}">
                <button class="gallery__addimg-btn gallery__addimg-btn-remove" id="order-gallery-remove" data-onum="">Удалить выбранное</button>
                ${galleryItemsHtml}
            </form>
        </div>
    `
}
export default galleryHtml
