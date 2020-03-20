$(function () {

    var hoursData = {
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
        16: '',
        17: ''
    }

    //display time and date at the top of page
    var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(todaysDate);

    //convert current moment.js to hr block
    var currentHour = parseInt(moment().format("H"));

    var timeBlockElements = $(".time-block")

    //for each hour
    timeBlockElements.each(function () {
        // get the hour of the block
        var hour = parseInt(this.id.split("-")[1]);

        // get the hour of the block
        var description = hoursData[hour.toString()];
        // in hours data object
        // get the text area 
        $(this).find("textarea").val(description);

        //if the hour is less than currentHour
        //give past class to the hour
        if (hour < currentHour) {
            $(this).addClass("past");
            //else if the hour is equal to the currentHour
            //give present class to the hour
        } else if (hour === currentHour) {
            $(this).addClass("present");
            //else give future class to the hour
        } else {
            $(this).addClass("future");
        }
    });

    // when user clicks on save button then saves to local storage
    $(".saveBtn").on("click", function () {
        var descriptionText = $(this).siblings(".description").val();
        var parentId = $(this).parent().attr("id");

        localStorage.setItem(parentId, descriptionText);
    });

    $(".time-block").each(function () {
        var myId = this.id;
        var textInput = localStorage.getItem(myId);
        // set textarea text/val to textInput
        $(this).find("textarea").val(textInput)
    });


    // -----> This was my second attempt I was setting two different items to local storage inside my on click fucntion<------
    // localStorage.setItem("description", JSON.stringify(descriptionText)); 
    // localStorage.setItem("parentId", JSON.stringify(parentId));
    // -----> Then outside of the function I tried doing this, but whenever i refreshes the screen the items on localStorage would get overwritten!<------
    // var descriptionInput = JSON.parse(localStorage.getItem("descriptionText"));
    // var idDescriptionInput = JSON.parse(localStorage.getItem("parentId"));
    // console.log(descriptionInput)
    // console.log(idDescriptionInput)

    // var allDivs = $(".container").children();
    // // console.log(allDivs);
    // allDivs.each(function (index, element) {
    //     if (element.id === idDescriptionInput) {
    //         console.log(descriptionInput);
    //         var test = $(this).children().eq(1).val(descriptionInput);
    //         console.log(test);
    //     }
    // });



    // -----> This was my first attempt i had to add id to every button and descriptions! It worked but it wasn't dry! <------
    // $("#saveBtn9").on("click", function () {
    //     var descriptionText = $("#description9").val();
    //     localStorage.setItem("descriptionText", JSON.stringify(descriptionText));
    // });
    // var descriptionInput = JSON.parse(localStorage.getItem("descriptionText"));
    // $("#description9").text(descriptionInput);


    // $("#saveBtn10").on("click", function () {
    //     var descriptionText2 = $("#description10").val();
    //     localStorage.setItem("descriptionText2", JSON.stringify(descriptionText2));
    // });

    // var descriptionInput2 = JSON.parse(localStorage.getItem("descriptionText2"));
    // $("#description10").text(descriptionInput2);


    // $("#saveBtn11").on("click", function () {
    //     var descriptionText3 = $("#description11").val();
    //     localStorage.setItem("descriptionText3", JSON.stringify(descriptionText3));
    // });
    // var descriptionInput3 = JSON.parse(localStorage.getItem("descriptionText3"));
    // $("#description11").text(descriptionInput3);


    // $("#saveBtn12").on("click", function () {
    //     var descriptionText4 = $("#description12").val();
    //     localStorage.setItem("descriptionText4", JSON.stringify(descriptionText4));
    // });
    // var descriptionInput4 = JSON.parse(localStorage.getItem("descriptionText4"));
    // $("#description12").text(descriptionInput4);


    // $("#saveBtn1").on("click", function () {
    //     var descriptionText5 = $("#description1").val();
    //     localStorage.setItem("descriptionText5", JSON.stringify(descriptionText5));
    // });
    // var descriptionInput5 = JSON.parse(localStorage.getItem("descriptionText5"));
    // $("#description1").text(descriptionInput5);


    // $("#saveBtn2").on("click", function () {
    //     var descriptionText6 = $("#description2").val();
    //     localStorage.setItem("descriptionText6", JSON.stringify(descriptionText6));
    // });
    // var descriptionInput6 = JSON.parse(localStorage.getItem("descriptionText6"));
    // $("#description2").text(descriptionInput6);


    // $("#saveBtn3").on("click", function () {
    //     var descriptionText7 = $("#description3").val();
    //     localStorage.setItem("descriptionText7", JSON.stringify(descriptionText7));
    // });
    // var descriptionInput7 = JSON.parse(localStorage.getItem("descriptionText7"));
    // $("#description3").text(descriptionInput7);


    // $("#saveBtn4").on("click", function () {
    //     var descriptionText8 = $("#description4").val();
    //     localStorage.setItem("descriptionText8", JSON.stringify(descriptionText8));
    // });
    // var descriptionInput8 = JSON.parse(localStorage.getItem("descriptionText8"));
    // $("#description4").text(descriptionInput8);


    // $("#saveBtn5").on("click", function () {
    //     var descriptionText9 = $("#description5").val();
    //     localStorage.setItem("descriptionText9", JSON.stringify(descriptionText9));
    // });
    // var descriptionInput9 = JSON.parse(localStorage.getItem("descriptionText9"));
    // $("#description5").text(descriptionInput9);
});