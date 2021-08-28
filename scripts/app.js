const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('.time');
const icon=document.querySelector('.icon img');
const updateUI=(data)=>{
    


    // const cityDetails=data.cityDetails;
    // const weather=data.weather;
    //destructured below
    const {cityDetails,weather}=data;
    console.log(data);




    //update details template
    details.innerHTML=
    `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    </div>`;
    //update icons
    
    const iconSrc=`./icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc)

    

    let timeSrc=weather.IsDayTime?'./day.svg':'./night.svg';
    // if(weather.IsDayTime){
    //     timeSrc='\day.svg';
    // }else{
    //     timeSrc='\night.svg';
    // }
    time.setAttribute('src',timeSrc);


    //remove the display none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
};

const updateCity=async (city)=>{
    const cityDetails=await getCity(city);
    const weather=await getConditions(cityDetails.Key);
    return {cityDetails,weather}; //when object key and value have same name we can elimate keyweather 

}



cityForm.addEventListener('submit',e=>{
    //prevent default action of page refresh
    e.preventDefault();
    //get city value
    const city=cityForm.city.value.trim();
    cityForm.reset();
    //update the ui with new city
    updateCity(city)
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));


})