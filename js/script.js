//DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Time function
const showTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    //AM & PM
    const amPm = (hours) => {
        if (hours >= 12) {
            return 'PM'
        } return 'AM'
    };

    const twelveHours = (hours) => {
        if (hours > 12) {
            return hours - 12;
        } else if (hours == 0) {
            return hours = 12;
        } return hours;
    };

    const zeroBefore = (minutes) => {
        if (minutes < 10) {
            return '0'+minutes;
        } return minutes;
    };

    //Output time
    time.innerHTML = twelveHours(hours) + ':' + zeroBefore(minutes) + ' ' + amPm(hours);

    setTimeout(showTime, 1000);

};

//Set up background & greeting
const changeBackground = () => {
    let today = new Date();
    let hours = today.getHours();
    let background = document.getElementById("background");

    if (hours >= 0 && hours <= 5) {
        //Night
        background.classList.add("night");
        greeting.innerHTML = "Good Night, ";
    } else if (hours >= 6 && hours <= 11) {
        //Morning
        background.classList.add("morning");
        greeting.innerHTML = "Good Morning, ";
    } else if (hours >= 12 && hours <= 17) {
        //Afternoon
        background.classList.add("afternoon");
        greeting.innerHTML = "Good Afternoon, ";
    } else {
        //Evening
        background.classList.add("evening");
        greeting.innerHTML = "Good Evening, ";
    }
};

//Get name
const getName = () => {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter your name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

//Set name
const setName = (e) => {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
};

//Get focus
const getFocus = () => {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Write down]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
};

//Set focus
const setFocus = (e) => {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run functions
showTime();
changeBackground();
getName();
getFocus();