window.addEventListener('load',()=>{
    let long ;
    let lat;
    let temperatureDescription = document.querySelector('.Temperature-description');
    let temperatureDegree = document.querySelector('.Temperature-degree');
    let LocationTimezone  =  document.querySelector('.location-timezone');
    let degreesection     =     document.querySelector('.degree-section')
     let degreespan     = document.querySelector('.Temperature span');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position=>{
           lon = position.coords.longitude ;
           lat = position.coords.latitude ;
         

           const proxy = 'https://cors-anywhere.herokuapp.com/' ;
          var key = {your API key} ;
           fetch(proxy+'api.openweathermap.org/data/2.5/weather?lat=' +lat+ '&lon=' +lon+  '&appid=' +key)
    
           .then(Response => { return  Response.json();
           })
           .then(data =>{
            console.log(data)
            const {temp} = data.main ;
            const {description}   = data.weather[0] ;
            const {name} = data ;
            var iconcode = data.weather[0].icon;
            temperatureDegree.textContent = temp ;
            temperatureDescription.textContent =  description ;
            LocationTimezone.textContent = name ;
               celcuis = (temp - 32) * (5/9) ;
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode+ ".png";
            document.querySelector('#img').src =  $('#wicon').attr('src', iconurl)  ;
            
            
        })
           .catch(function(){
                alert('Please allow location')
           })
        //    window.onload = function() {
        //        WeatherBallon(6167865);
        //    }

        });
        degreesection.addEventListener('click',()=>{
            if(degreespan.textContent === 'F') {
                degreespan.textContent = 'C';
                temperatureDegree.textContent = Math.floor(celcuis) ;
            }else {
                degreespan.textContent === 'F'
                temperatureDegree,textContent = temp ;
            }
        })
    }
    // }else {
    //     h1.textcontent ="Please allow your location to access the temperature" 
    // }
    // function setIcons (icon,iconID) {
    //     const skyicons = new skyicons({color:"white"}); 
    //     const currentIcon = 'http://openweathermap.org/img/wn/'+icon+'.png'
    // }
});