$(document).ready(function () {
    // Display the current date and time
    let NowMoment = moment().format('Do MMMM YYYY');
    let displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format('HH');

    // Button Function- clear contents & local storage
    $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
    });

})





// Color-code each timeblock based on past, present, and future

// enter an event when they click a timeblock.

// local storage when the save button is clicked