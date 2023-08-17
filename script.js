const apiKey = "72b8c73282aa1191a1a624e30804543f";
const URL = "https://api.openweathermap.org/data/2.5/weather?";

const SearchBtn = document.getElementById("searchbtn");
const searchText = document.getElementById("searchBox");

SearchBtn.addEventListener("click", () => {
    if(searchText.value == ''){
        alert("Enter City name");
    }else {
        checkWeather();
        async function checkWeather(){
            const response = await fetch(URL + ` &q=${searchText.value} &appid=${apiKey}`);
            var data = await response.json();

            if(response.status == 404){
                alert("Not Connected to Server / Invalid City Name");
            }
            else{
                console.log(data);
                document.querySelector(".tempText").innerHTML = data.main.temp + "°c";
            }
        }
       
    }
})