const numOfButtons = document.querySelectorAll('.pad');

numOfButtons.forEach((btn) => {

    btn.addEventListener('click', () => {

        const btnstyle = btn.querySelector('h2').innerText;
        sound(btnstyle);

    });

});

document.addEventListener('keypress', (event) => {

    sound(event.key)

})

function sound(key){

    switch(String(key).toLowerCase()){

        case 'a':
            var sound1 = new Audio('/audio/clap.wav');
            sound1.play();
            stylekey(key)
            break;
        case 's':
            var sound2 = new Audio('/audio/hihat.wav');
            sound2.play();
            stylekey(key)
            break;    
        case 'd':
            var sound3 = new Audio('/audio/kick.wav');
            sound3.play();
            stylekey(key)
            break;
        case 'f':
            var sound4 = new Audio('/audio/openhat.wav');
            sound4.play();
            stylekey(key)
            break;  
        case 'g':
            var sound5 = new Audio('/audio/boom.mp3');
            sound5.play();
            stylekey(key)
            break;
        case 'h':
            var sound6 = new Audio('/audio/ride.wav');
            sound6.play();
            stylekey(key)
            break;    
        case 'j':
            var sound1 = new Audio('/audio/snare.wav');
            sound1.play();
            stylekey(key)
            break;
        case 'k':
            var sound1 = new Audio('/audio/tom.wav');
            sound1.play();
            stylekey(key)
            break;   
        case 'l':
            var sound1 = new Audio('/audio/tink.wav');
            sound1.play();
            stylekey(key)
            break;   

    }

}

function stylekey(key){

    const selectedKkey = document.querySelector(`.${key}`)

    if(!selectedKkey){ console.warn('no element'); return;}

    selectedKkey.classList.add('animate')

    setTimeout(() => {
        selectedKkey.classList.remove('animate')
    }, (200));

}