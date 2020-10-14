import { store } from "../index";

// s = s.replace(/^,*/,""); //Removes all commas from the beginning
// s = s.replace(/,*$/,""); //Removes all commas from the end

const getGalleryData = async() => {
    const url = store.getState().fetchUrl.getGalleryData;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                if(item.gallery != ''){
                    item.gallery = item.gallery.replace(/^,*/,"").replace(/,*$/,"").split(',');
   
                }
            })
            store.getState().galleryData = data;
        })
        
}

export default getGalleryData