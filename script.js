var listE1 = document.querySelector('#list');
var tableBody = document.getElementById('city-table');
var cityBox1 = document.querySelector('#cityId');

$(document).ready(() => {
    $("#search-button").on("click", function (event) {
     event.preventDefault();
     //add to local storage and get to append table
      //  alert("buttonClick")
        var city = $('#search-value').val()
        console.log(city);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddb3fdcf857d1a6f4caecf9c07c0201d`,
            success: function (result) {
                console.log(result);
  //              localStorage.setItem("result", "");
  //append details  
var createTableRow = document.createElement('tr');
var tableData = document.createElement('td');

tableData.textContent = (city);

createTableRow.appendChild(tableData);
tableBody.appendChild(createTableRow);
//This changes the city name to what was searched
cityBox1.append(city);



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