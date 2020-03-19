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


    $("#saveBtn1").on("click", function () {
        var descriptionText5 = $("#description1").val();
        localStorage.setItem("descriptionText5", JSON.stringify(descriptionText5));
    });
    var descriptionInput5 = JSON.parse(localStorage.getItem("descriptionText5"));
    $("#description1").text(descriptionInput5);


    $("#saveBtn2").on("click", function () {
        var descriptionText6 = $("#description2").val();
        localStorage.setItem("descriptionText6", JSON.stringify(descriptionText6));
    });
    var descriptionInput6 = JSON.parse(localStorage.getItem("descriptionText6"));
    $("#description2").text(descriptionInput6);


    $("#saveBtn3").on("click", function () {
        var descriptionText7 = $("#description3").val();
        localStorage.setItem("descriptionText7", JSON.stringify(descriptionText7));
    });
    var descriptionInput7 = JSON.parse(localStorage.getItem("descriptionText7"));
    $("#description3").text(descriptionInput7);


    $("#saveBtn4").on("click", function () {
        var descriptionText8 = $("#description4").val();
        localStorage.setItem("descriptionText8", JSON.stringify(descriptionText8));
    });
    var descriptionInput8 = JSON.parse(localStorage.getItem("descriptionText8"));
    $("#description4").text(descriptionInput8);


    $("#saveBtn5").on("click", function () {
        var descriptionText9 = $("#description5").val();
        localStorage.setItem("descriptionText9", JSON.stringify(descriptionText9));
    });
    var descriptionInput9 = JSON.parse(localStorage.getItem("descriptionText9"));
    $("#description5").text(descriptionInput9);


    // when they refresh page then todo list is still saved
    // (get from local storage)
});