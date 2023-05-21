

const apiKey = "yourapikey";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search = document.querySelector('input')
const search_button = document.querySelector('button')
const weather_image =  document.querySelector('.clouds')

const max_length = 20

const errors = document.getElementById('error')

const no_value =  null

async function fetchWeather(city){
    /**
    
    Fetching the weather data from the openweathermap site

     */
    try {
        const respones = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await respones.json();

        console.log(data['cod']); 
        console.log(data['name'])
        console.log(data['message'])

        
        // handing errors //
        if (data['name'] == undefined){
            setTimeout(()=>{

                all_styles = {
                    'border': '1px solid red',
                    'bg': 'red',
                    'borderR': '4px',
                    'fontFam': "Courier New', Courier, monospace",
                    'fontZ': '20px',
                    'color': 'white',
                    'w': '400px',
                    'h': '40px',

                    

                }
                errors.innerHTML = 'Please enter a city name';
                const color1 =  '#ed213a';
                const color2 =  '#93291e';
                errors.style.border = all_styles.border;
                errors.style.backgroundColor = all_styles.bg;
                errors.style.borderRadius = all_styles.borderR;
                errors.style.fontSize = all_styles.fontZ;
                errors.style.fontFamily = all_styles.fontFam;
                errors.style.color = all_styles.color;
                errors.style.width = all_styles.w;
                errors.style.height = all_styles.h;

                
            },400);
            
        }

        
        errors.style.background = no_value;
        errors.innerHTML = no_value;
        errors.style.borderColor = no_value;
        errors.style.width = no_value;
        errors.style.color = no_value;
        errors.style.fontFamily = no_value;
        errors.style.fontSize = no_value;
        errors.style.borderRadius = no_value;


        

        
        

        function AddingActualInformation(){
            // converting predefined data into actual real life weather data //
            document.querySelector(".city").innerHTML = data['name'];
            document.querySelector(".temp").innerHTML = Math.round(data['main']['temp']) + "°c";
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector('.wind').innerHTML = data['wind']['speed'] + " km/h";

        }

        
        

        function updatingWeather(){
            // Updating the weather
            if(data['weather'][0]['main'] == 'Clear'){
            weather_image.src = './images/cloud.png'

            }

            if (data['weather'][0]['main'] == 'Mist'){
                weather_image.src = './images/raining.png';
            }


        }

        updatingWeather();
        
        AddingActualInformation();


    
    } catch (error) {
        window.alert('Sorry there is a problem')
    }
     // getting respones in json format //
    

}

//event listener when click on the input button
search_button.addEventListener('click', ()=>{
    fetchWeather(search.value);
    
    if (search.value.length > max_length){
        window.alert('Please enter a valid city name and max number is' + max_length);
    }

     
        
    
})
