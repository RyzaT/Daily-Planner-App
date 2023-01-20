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

    // Hour from each time slot compared to actual time
    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];

        if (currentHour == timeDiv) {
            $(this).addclass("present");
            $(this).children(".description").addclass("white-text");
        }   else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addclass("future");
        }   else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    // local storage when the save button is clicked
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().atrr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

})





// Color-code each timeblock based on past, present, and future

// enter an event when they click a timeblock.

