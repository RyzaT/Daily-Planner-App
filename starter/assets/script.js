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
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        }   else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        }   else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    // local storage when the save button is clicked
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    // Pull items from local storage and return to correct hour.
    $("#hour-09 .timeblock").val(localStorage.getItem("09"));
    $("#hour-10 .timeblock").val(localStorage.getItem("10"));
    $("#hour-11 .timeblock").val(localStorage.getItem("11"));
    $("#hour-12 .timeblock").val(localStorage.getItem("12"));
    $("#hour-13 .timeblock").val(localStorage.getItem("13"));
    $("#hour-14 .timeblock").val(localStorage.getItem("14"));
    $("#hour-15 .timeblock").val(localStorage.getItem("15"));
    $("#hour-16 .timeblock").val(localStorage.getItem("16"));
    $("#hour-17 .timeblock").val(localStorage.getItem("17"));

})





// Color-code each timeblock based on past, present, and future

// enter an event when they click a timeblock.

