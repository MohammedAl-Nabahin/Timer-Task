//Action Elements
const inputSection = document.querySelector('#inputs');
const inputSpace = document.querySelector('#inputDiv');
const psudoInput = document.querySelector('#psudoIn');
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const seconds = document.querySelector('#sec');
const changeBtn = document.querySelector('#sBtn');
const reset = document.querySelector('#reset');
const timer = document.querySelector('#time');


//Hide Div To Show Input
psudoInput.addEventListener( 'click',()=>{
    psudoInput.style  = "display:none;";
    inputSection.style = "display:block;";
});


let interval;

//get the values of the inputs
let h,m,s,mins;
hour.addEventListener('change',()=>{
     h = hour.value;
     mins = h*60;
});

min.addEventListener('change',()=>{
    m = min.value;
    mins= h*60 + Number(m);
});

seconds.addEventListener('change',()=>{
    s = seconds.value;
});



window.alert(
    "Watch Out! You Must Enter Numbers even zeros, In the input its"+
    " a placeholder ");


//function to do countdown when start
function countDown(){
    // if((h == undefined || h==null)&&(m == undefined || m==null)&&(s == undefined || s==null)){
    //     inputSection.innerHTML = psudoInput;
    //     clearInterval(interval);
    // }

 
    if (changeBtn.innerHTML == "Start") {
         changeBtn.innerHTML = "Stop";
        
        interval = setInterval(() => {  

            console.log(mins,s);
            if(s==0 && m >0){
                s = m *60;
                mins = mins-1;
                s--;
            }
             if(s >=00 && mins >=00){
                s--;
                if(s==00 && mins>0){
                    s = 59;
                    mins--;
                }else if((mins ==00 && s==0)){
                    s=59;
                    mins--;
                }
                if(s==0 && mins==00){
                    inputSection.innerHTML = psudoInput;
                }
               
                timer.textContent =mins+"m"+" "+s+"s";
                inputSection.style= "display:none;";
                timer.style= "display:block;";

                

                if(mins == 00 && s == 1){
                    window.alert("Timer Is Up!");
                    clearInterval(interval);
                    mins =00;
                    s=00;
                    h=00;
                    m=00;
                }
            }
        }, 1000);

    
    } else if(changeBtn.innerHTML == "Stop") {
        clearInterval(interval);
        changeBtn.innerHTML = 'Start';
        h=h;
        mins = mins;
        s=s;
        m=m;
    }
}

//event on start and stop button
changeBtn.addEventListener('click', countDown);

// reset Button event
reset.addEventListener('click', () => {
    clearInterval(interval);
    h= h;
    m= m;
    s= s;
    mins = mins;
    psudoInput.style  = "display:block;";
    inputSection.style = "display:none;";
    timer.style = "display:none;";
});


//stopwatch
// stopWatch.addEventListener('click' , ()=>{
//     inputSpace.style = "display:none;";
//     watchSec.style = "display:block;"

// });


// const time_el = document.querySelector('.watch .time');
// const start_btn = document.getElementById('start');
// const stop_btn = document.getElementById("stop");
// const reset_btn = document.getElementById("resetWatch");

// let secondsWatch = 0;
// let intervalWatch = null;

// // Event listeners
// start_btn.addEventListener('click', start);
// stop_btn.addEventListener("click", stop);
// reset_btn.addEventListener("click", reset);

// // Update the timer
// function timero () {
// 	secondsWatch++;

// 	// Format our time
// 	let hrs = Math.floor(secondsWatch / 3600);
// 	let mins = Math.floor((secondsWatch - (hrs * 3600)) / 60);
// 	let secs = secondsWatch % 60;

// 	if (secs < 10) secs = '0' + secs;
// 	if (mins < 10) mins = "0" + mins;
// 	if (hrs < 10) hrs = "0" + hrs;

// 	time_el.innerText = `${hrs}:${mins}:${secs}`;
// }
