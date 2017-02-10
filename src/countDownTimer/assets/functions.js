var timer = document.getElementById('clockdiv');
var daysEl = timer.querySelector('.days');
var hoursEl = timer.querySelector('.hours');
var minutesEl = timer.querySelector('.minutes');
var secondsEl = timer.querySelector('.seconds');
//var millisEl = timer.querySelector('.millis');

var endTime = "January 1 2018 00:00:00 GMT+0200";
updateTimer()
setInterval(updateTimer, 1000);

//document.getElementById('clockdiv').appendChild();

//timer.style.backgroundColor =  'yellow';

//var button  = document.getElementById('button');
button.onclick = showMessage;

//button.addEventListener('mouseover', showMessage);
//button.addEventListener('mouseout', showMessage);

button.addEventListener('click', showMessage);



function showMessage(e) {
    e.stopPropagation()
    alert('hello world');
    console.log(e)
}

function updateTimer(){
    var timeRemaining = getTimeRemaining(endTime);
    daysEl.innerHTML = timeRemaining.days;
    hoursEl.innerHTML = timeRemaining.hours;
    minutesEl.innerHTML = timeRemaining.minutes;

    secondsEl.innerHTML = timeRemaining.seconds;
    //millisEl.innerHTML = timeRemaining.millis;
}

function getTimeRemaining(endTime){
    var time = Date.parse(endTime) - Date.parse(new Date());
    //var millis = Math.floor( (time ) ) ;
    var seconds = Math.floor( (time / 1000) % 60 );
    var minutes = Math.floor( (time / 1000/ 60 ) % 60 );
    var hours = Math.floor( (time / (1000 * 60 * 60 ) % 24 ));
    var days = Math.floor( time / (24 * 1000 * 60 * 60) );
    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
        //millis: millis
    };
}




function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '{your-app-id}',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};



// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}


