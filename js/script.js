const input=document.querySelector('.input-search input');
const BtnSearch=document.querySelector('.input-search ion-icon');
const cityKeeper=document.querySelector('.city-keeper');
const Message=document.querySelector('.search span');

BtnSearch.addEventListener('click',()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=19d539e77aa83ac36ccbc1ef8e6db1d2&units=metric`)
    .then(response =>response.json())
    .then((data) => {
        const icon =`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;
        console.log(icon)
        cityKeeper.innerHTML =`<div class="city-item">
        <div class="city-item__title">
            <h3>${data.name}</h3>
            <span>${data.sys.country}</span>
        </div>
        <div class="dgree">
             <h3>${Math.round(data.main.temp)}</h3>
        </div>
        <div class="icon">
            <div><img  src='${icon}'></div>
            <span>${data.weather[0].main}</span>
        </div>
    </div>
</div>`
        input.value='';
        Message.innerText="";
        // console.log(data.weather[0].icon)
    })
    .catch(()=>{
        Message.innerText="This city  does not exist";
    })
})


