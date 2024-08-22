const { AMSTERDAM_NAME_KEY } = require("@elastic/eui");

const date = new Date();



function updateCounter(){
    let hour = date.getHours();
    let amPm =  hour > 12 ? "PM": "AM";
    if(hour > 12){
        hour = hour %  12;
    }
    let min = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(String(hour) + ":" + String(min) + ":"+ String(seconds) + " " + amPm);
}

updateCounter();

