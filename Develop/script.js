//display time and date at the top of page
$(function () {
    var hr9 = 9;
    var hr10 = 10;
    var hr11 = 11;
    var hr12 = 12;
    var hr13 = 1;
    var hr14 = 2;
    var hr15 = 3;
    var hr16 = 4;
    var hr17 = 5;

    var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(todaysDate);

    //compare to the variable moment.js
    //convert current moment.js to hr block
    var currentHour = parseInt(moment().format('LT'));
    console.log(currentHour);
    
    if(hr9 < currentHour){
        //time block is grey if its past
        $("#hour-9").addClass("past");
    }else if(hr9 === currentHour) {
        //time black is red if its current
        $("#hour-9").addClass("present");
    }else if (hr9 > currentHour) {
        //time block is green if its future
        $("#hour-9").addClass("future");
    }
    
    if (hr10 < currentHour) {
        $("#hour-10").addClass("past");
    }else if(hr10 === currentHour) {
        $("#hour-10").addClass("present");
    }else if (hr10 > currentHour) {
        $("#hour-10").addClass("future");
    }

    if (hr11 < currentHour) {
        $("#hour-11").addClass("past");
    }else if(hr11 === currentHour) {
        $("#hour-11").addClass("present");
    }else if (hr11 > currentHour) {
        $("#hour-11").addClass("future");
    }

    if (hr12 < currentHour) {
        $("#hour-12").addClass("past");
    }else if(hr12 === currentHour) {
        $("#hour-12").addClass("present");
    }else if (hr12 > currentHour) {
        $("#hour-12").addClass("future");
    }

    if (hr13 < currentHour) {
        $("#hour-13").addClass("past");
    }else if(hr13 === currentHour) {
        $("#hour-13").addClass("present");
    }else if (hr13 > currentHour) {
        $("#hour-13").addClass("future");
    }

    if (hr14 < currentHour) {
        $("#hour-14").addClass("past");
    }else if(hr14 === currentHour) {
        $("#hour-14").addClass("present");
    }else if (hr14 > currentHour) {
        $("#hour-14").addClass("future");
    }

    if (hr15 < currentHour) {
        $("#hour-15").addClass("past");
    }else if(hr15 === currentHour) {
        $("#hour-15").addClass("present");
    }else if (hr15 > currentHour) {
        $("#hour-15").addClass("future");
    }

    if (hr16 < currentHour) {
        $("#hour-16").addClass("past");
    }else if(hr16 === currentHour) {
        $("#hour-16").addClass("present");
    }else if (hr16 > currentHour) {
        $("#hour-16").addClass("future");
    }

    if (hr17 < currentHour) {
        $("#hour-17").addClass("past");
    }else if(hr17 === currentHour) {
        $("#hour-17").addClass("present");
    }else if (hr17 > currentHour) {
        $("#hour-17").addClass("future");
    }

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

});