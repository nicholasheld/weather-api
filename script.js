var listE1 = document.querySelector('#list');
var tableBody = document.getElementById('city-table');
var cityBox1 = document.querySelector('#cityId');
var temp = document.querySelector('#temp');
var humi = $('#humi');
var wind = $('#wind');
var uv =$('#uv');

$(document).ready(() => {

    $("#search-button").on("click", function (event) {
        event.preventDefault();
        $("#cityId").empty();
        //add to local storage and get to append table
        //  alert("buttonClick")
        var city = $('#search-value').val()
        console.log(city);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ddb3fdcf857d1a6f4caecf9c07c0201d`,
            success: function (result) {
                console.log(result);
                //              localStorage.setItem("result", "");
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');

                tableData.textContent = (city);

                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
                //This changes the city name to what was searched
                cityBox1.append(city);
                //attempting to append temp 1 in box 1
                temp.append(result.main.temp + ' F');
                humi.append(result.main.humidity + ' %');
                wind.append(result.wind.speed + ' mph')
                uv.append(result.main.temp);


            }
        })

        forecast(city);
    })
    function forecast(search) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=ddb3fdcf857d1a6f4caecf9c07c0201d`,
            success: function (result) {
                console.log(result);
                for (i = 0; i < result.list.length; i++) {

                    if (result.list[i].dt_txt.indexOf("12:00:00") !== -1) {
                        console.log(result.list[i]);
                        //create card dynamically and append to - check boostap outermost card if card body works
                        var card = $('<div>').addClass("card");
                    }

                }

            }
        })
    }

});

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