let c = 0;

function updateCounter(){
    c++;
    console.log(c);
}
setInterval(updateCounter,1000);