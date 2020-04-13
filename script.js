var secondHand= document.querySelector(".second-hand");
var hourHand= document.querySelector(".hour-hand");
var minuteHand= document.querySelector(".minute-hand");
var digitalTime = document.querySelector(".digitalTime");
// console.log(digitalTime);
// console.log(Date());
function setDate(){
    var date= new Date();
    var seconds = date.getSeconds();
    var secondsInDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
    // console.log(seconds)

    var minute = date.getMinutes();
    var minuteInDegrees = ((minute/60)*360)+90;
    minuteHand.style.transform = `rotate(${minuteInDegrees}deg)`;

    var hour = date.getHours();
    var hourInDegrees = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;

    if(seconds==0){
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
       } else {
        secondHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
       }

}
setInterval(setDate,1000);