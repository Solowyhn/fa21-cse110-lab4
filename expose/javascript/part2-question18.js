// both function works but be sure to call one function at a time.
// function 1
function time1(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
time1();
setInterval(time1, 1000);

// function2
function time2(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    setTimeout(time2, 1000);
}

time2();

