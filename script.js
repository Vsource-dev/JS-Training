const cards = document.querySelector(".cards");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

prev.addEventListener("click", ()=>{
    if(cards.scrollLeft <= 0){
        cards.scrollLeft  = cards.scrollWidth - cards.clientWidth;
    }else{
        cards.scrollLeft -= 300;
    }
});

next.addEventListener("click", ()=>{
    if(cards.scrollLeft + cards.clientWidth >= cards.scrollWidth){
        cards.scrollLeft  =  0;
    }else{
        cards.scrollLeft += 300;
    }
})