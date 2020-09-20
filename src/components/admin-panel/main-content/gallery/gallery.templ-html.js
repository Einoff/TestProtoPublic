
const galleryHtml = (onum, store) => {
    const galleryItems = store.getState().galleryData;
    const currentGalleryImgUrl = galleryItems.find(item => item.id === onum);
    let galleryItemsHtml = '';

    if(currentGalleryImgUrl){
        galleryItemsHtml = currentGalleryImgUrl.gallery.reduce((accum, itemR) => {
            return `
                ${accum}
                <img src="../../../../assets/image/orders/${onum}/${itemR}" alt="gallery-img" class="gallery__item-img">
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

            <div class="gallery__item" id="galleryWrap">
                ${galleryItemsHtml}
            </div>
        </div>
    `
}

export default galleryHtml