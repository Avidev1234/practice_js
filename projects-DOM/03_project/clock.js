const clock = document.getElementById('clock');
// console.log(clock);


// setInterval:-Is the method which will run the the method in a particular interval of time.
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)