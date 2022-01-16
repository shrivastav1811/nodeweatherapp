const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById("submitbutton");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temperature_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async(event)=> {
    event.preventDefault();
    let cityVal = cityname.value;  
   if(cityVal === ""){
      city_name.innerText ="Please Write the Name Before Search";
      datahide.classList.add("data_hide");
   }
       else {
           try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1348e348310c0d899f3fe244350f02ce`  
       
        const response = await fetch(url); 
        const data = await response.json();
        const arrData = [data];
  
         city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
         temp_real_val.innerText = arrData[0].main.temp;
        const tempMods = arrData[0].weather[0].main;

       // condition to check sunny or cloudy
       if (tempMods == "clear") {
           temp_status.innerHTML =
          " <i class = 'fas fa-sun' style='color:#eccc68;'></i> ";
       } 
         else if (tempMods == "clouds") {
            temp_status.innerHTML =
            " <i class = 'fas fa-cloud' style='color:#f1f2f6;'></i> ";
         }
          else if (tempMods == "Rain") {
            temp_status.innerHTML =
            " <i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i> "   ;
          }
           else {
            temp_status.innerHTML =
            " <i class = 'fas fa-sun' style='color:#eccc68;'></i> ";
           }

           datahide.classList.remove("data_hide");


     } catch {
         city_name.innerText ="Please Enter The City Name Properly";
          datahide.classList.add("data_hide");

     }
    }
}


submitbutton.addEventListener("click", getInfo);