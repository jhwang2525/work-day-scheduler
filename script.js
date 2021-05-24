$(document).ready(function(){

    var hour = moment().hours();

    // Current day //
    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };



    // Saved event persist after refresh //
    function renderStoredInputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

   // block color-coded  depending on past, present, or futre //
   function colorSchedule(){
    $("input").each(function(){
        var rowHour = $(this).attr("id");
        var rowNumber = parseInt(rowHour);
        if (rowNumber === hour){
            $(this).addClass("present");
        } else if (rowNumber < hour){
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
};
    // Save to local Storage //
    $(".saveBtn").click(function(){
        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });
    
    setInterval(getDate,1000);
    colorSchedule();
    setInterval(colorSchedule,1000);
    renderStoredInputs();

});
