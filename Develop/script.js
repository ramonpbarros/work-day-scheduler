//display time and date at the top of page
$(function () {

    var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(todaysDate);

    //compare to the variable moment.js
    //convert current moment.js to hr block
    var currentHour = moment().format('LT');
    if ($(".time-block" < currentHour)) {
        //time block is grey if its past
        $(".time-block").addClass("past");
    } else if ($(".time-block" == currentHour)) {
        //time black is red if its current
        $(".time-block").addClass("present");
    } else {
        //time block is green if its future
        $(".time-block").addClass("future");
    };
    // when user clicks on save button then saves to local storage
    $("#saveBtn9").on("click", function () {
        var descriptionText = $("#description9").val();
        localStorage.setItem("descriptionText", JSON.stringify(descriptionText));
    });
    var descriptionInput = JSON.parse(localStorage.getItem("descriptionText"));
    $("#description9").text(descriptionInput);


    $("#saveBtn10").on("click", function () {
        var descriptionText2 = $("#description10").val();
        localStorage.setItem("descriptionText2", JSON.stringify(descriptionText2));
    });
    var descriptionInput2 = JSON.parse(localStorage.getItem("descriptionText2"));
    $("#description10").text(descriptionInput2);


    $("#saveBtn11").on("click", function () {
        var descriptionText3 = $("#description11").val();
        localStorage.setItem("descriptionText3", JSON.stringify(descriptionText3));
    });
    var descriptionInput3 = JSON.parse(localStorage.getItem("descriptionText3"));
    $("#description11").text(descriptionInput3);


    $("#saveBtn12").on("click", function () {
        var descriptionText4 = $("#description12").val();
        localStorage.setItem("descriptionText4", JSON.stringify(descriptionText4));
    });
    var descriptionInput4 = JSON.parse(localStorage.getItem("descriptionText4"));
    $("#description12").text(descriptionInput4);


    $("#saveBtn10").on("click", function () {
        var descriptionText2 = $("#description10").val();
        localStorage.setItem("descriptionText2", JSON.stringify(descriptionText2));
    });
    var descriptionInput2 = JSON.parse(localStorage.getItem("descriptionText2"));
    $("#description10").text(descriptionInput2);


    $("#saveBtn10").on("click", function () {
        var descriptionText2 = $("#description10").val();
        localStorage.setItem("descriptionText2", JSON.stringify(descriptionText2));
    });
    var descriptionInput2 = JSON.parse(localStorage.getItem("descriptionText2"));
    $("#description10").text(descriptionInput2);


    $("#saveBtn10").on("click", function () {
        var descriptionText2 = $("#description10").val();
        localStorage.setItem("descriptionText2", JSON.stringify(descriptionText2));
    });
    var descriptionInput2 = JSON.parse(localStorage.getItem("descriptionText2"));
    $("#description10").text(descriptionInput2);


    // when they refresh page then todo list is still saved
    // (get from local storage)
});