var listE1 = document.querySelector('#list')

$(document).ready(() => {
    $("#search-button").on("click", function (event) {
     event.preventDefault();
      //  alert("buttonClick")
        var city = $('#search-value').val()
        console.log(city);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddb3fdcf857d1a6f4caecf9c07c0201d`,
            success: function (result) {
                console.log("hello World");
                console.log(result);
                var createList = documnet.createElecment("li");
                document.getElementById('#search-value')
            }
        })
    })
})



/*

localStorage.setItem("name", "John Doe");
localStorage.getItem("name");

api.openweath/ermap.org/data/2.5/weather?q={city name}&units=imperial&appid=ddb3fdcf857d1a6f4caecf9c07c0201d

function getWeather(city)   {
    var city = document.querySelector('#search-value').value
    var endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ddb3fdcf857d1a6f4caecf9c07c0201d`

    fetch(endpoint)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })

}
document.querySelector('#search-button').addEventListener("click",getWeather)*/