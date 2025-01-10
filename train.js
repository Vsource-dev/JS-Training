const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.getElementById('weatherInput');
const card = document.querySelector('.card');
const apiKey = 'ff0ccfc9eef75350c783ceb350614a18';

weatherForm.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }catch(error){
            console.error(error);
            displayError(error)
        }

    }else{
        displayError('Please enter city');
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);

    if(!response.ok){

        throw new Error('Cannot fetch data');

    }

    return await response.json();

}

function displayWeatherInfo(data){

   const {name: city, 
          main: {temp,humidity}, 
          weather:[{description, id}]} = data;

    card.textContent = '';
    card.style.display = 'flex';
    
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const emojiDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');

    tempDisplay.textContent = `${(temp - 273.25).toFixed(1)}°C`;
    tempDisplay.classList.add('tempDisplay');

    humDisplay.textContent = `Humidity: ${humidity}`;
    humDisplay.classList.add('humDisplay');

    descDisplay.textContent = description;
    descDisplay.classList.add('descDisplay');

    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add('emojiDisplay');
    
    card.append(cityDisplay)
    card.append(tempDisplay)
    card.append(humDisplay)
    card.append(descDisplay)
    card.append(emojiDisplay)


}

function getWeatherEmoji(weatherId){


    switch(true){

        case(weatherId >= 200 && weatherId < 300):
            return '🌩️';
            break;
        case(weatherId >= 300 && weatherId < 500):
            return '🌫️';
            break;
        case(weatherId >= 500 && weatherId < 600):
            return '🌧️'
            break;
        case(weatherId >= 600 && weatherId < 700):
            return '❄️'
            break;
        case(weatherId >= 700 && weatherId < 800):
            return '☁️'
            break;
        case(weatherId == 800):
            return '☀️'
            break;
        case(weatherId > 800):
            return '🌥️'
            break;
        default:
            return '?'


    }


}

function displayError(message){

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent  = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay)

}