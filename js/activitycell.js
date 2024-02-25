$(document).ready(function() {
    $("tr td").click(function() {
        var index = $(this).index();
        //Checks if the element has a location available for the activity and
        //the element is not a cell with the activity written on it.
       if( $(this).text() != "Not Available" && $(this).index() != 0 ) {
            //Change cell color to darker green otherwise go back to original color
            if( $(this).css("background-color") != "rgb(158, 208, 52)" ) {
                $(this).css("background-color","rgb(158, 208, 52)");
                $(this).css('color','white');
            } else {
                $(this).css("background-color","");
                $(this).css('color','');
            }

            if ($(this).css("background-color") == "rgb(158, 208, 52)") {
                // $('#displaySelected').css("visibility","visible"); //make display box visible
                // $('#displaySelected').css("margin-top","2em"); //add spaces above display box
                $('.modal-body').append("<p>"+$(this).text()+" at "+$('th').eq(index).text()+"</p>"); //add child element with contents of cell
            } else { //if selected cell don't have class
                $('.modal-body p:contains('+$(this).text()+')').remove(); //remove child element
                if ($('.modal-body').has('p').length == false) { //check if there are any child elements within parent
                    // $('#displaySelected').css("visibility","hidden"); //make display box hidden
                    // $('#displaySelected').css("margin-top","0"); //remove spaces above display box
                }
            }
       }
    });
    $("tr td").hover(function() {
        //Checks if the element has a location available for the activity and
        //the element is not a cell with the activity written on it.
        //then change cursor to show a pointer
       if( $(this).text() != "Not Available" && $(this).index() != 0 ) {
        $(this).css("cursor","pointer");
       }
    });

    //nice to have to show user that after clicking get info something happens
    $("#getInfo").click(function () {
        setTimeout(() => alert("success! Will get back with more info soon!"), '1000' );
    });
})