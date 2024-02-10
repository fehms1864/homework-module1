$(document).ready(function() {
    $("tr td").click(function() {
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

})