const akane_pic = document.getElementById('akane');
const button = document.getElementById('begone')

button.addEventListener('click', (event) => {

    if(akane_pic.style.visibility === 'hidden'){

        akane_pic.style.visibility = 'visible';
        button.textContent = 'Hide';

    }else{

        akane_pic.style.visibility = 'hidden';
        button.textContent = 'show'
    
    }

});