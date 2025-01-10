fetchData()

async function fetchData() {
    
    try{

        const pokemonName = document.getElementById('pkmn').value;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){

            throw new Error('No pokemon exist')

        }
       
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const img = document.getElementById('pkmn-sprite');

        img.src = pokemonSprite;
        img.style.display = 'block';
         

    }catch(error){

        console.error(error)

    }

}