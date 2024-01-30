function partners() {
    //This is one way to create the partnerFileNames. 
    //Other option could be to rename the .png files in partners folder
    var imageDescriptions = ['bustour','cabinrental','campingadv','collegetours','rentalbike','tourgroup'];
    
    var partners = []; //Declare an empty array to partners image element
    var partnerFileNames = []; //Declare an empty element to store partner image file names
    var imageList = []; //Declare an empty array to store html list that contain an image
    var image; //Declare an empty variable to store the assembled image list codes
    var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
    var closeList = "</li>"; //Declare a variable to contain close list tag

    //Create a loop to create 6 partners starting with index of 0
    for (var i=0; i<6; i++) {
        partnerFileNames.push("partner-"+imageDescriptions[i]); //Create image file name and store in the array
        partners.push("<img src='images/partners/" +partnerFileNames[i]+".png'>"); //Assemble file name into image element and store in an array
        image = openList + partners[i] + closeList; //Assemble image element from array with list elements and store in a variable
        imageList.push(image); //Store(push) the assembled list codes into an array
    }

    //Display all six image codes store in the array
    document.getElementById("partners").innerHTML = imageList.join("");
}

//Initial run of partners
partners();
