import fetchPost from "./fetchPost";

// добавляет submit обработчик. 
const addFormHandler = (formName, url, defaultFunction) => {
    const form = document.getElementById(formName);
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        if(formData.get('name')){
            await fetchPost(url, formData);
            form.reset();
            if(defaultFunction){
                defaultFunction();
            }
        }else{
            const inputName = form.querySelector('.settings-add-input[name="name"]');
            inputName.classList.add('border-error');

            inputName.addEventListener('focusin', (e) => {
                // const formValid = form.querySelector('.form-validator');
                // if(formValid){
                    // formValid.remove();
                    inputName.classList.remove('border-error');
                // }
            })

            setTimeout(() => {
                // const formValid = form.querySelector('.form-validator');
                // if(formValid){
                    // formValid.remove();
                    inputName.classList.remove('border-error');
                // }
            }, 3000)
            
        }

    })
}

export default addFormHandler