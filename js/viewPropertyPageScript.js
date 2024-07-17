

// these are all inputs used for creating a new property
let propertyNameInput = document.getElementById("propertyNameInput");
let propertyAddressInput = document.getElementById("propertyAddressInput");
let propertyCityInput = document.getElementById("propertyCityInput");

// provinces is a drop down menu and I am not 100% certain that this is the best way, or correct ID location to get a value from a dropdown menu
// -- TESTING REQUIRED HERE ***
let propertyProvinces = document.getElementById("propertyProvinces"); // added a province input as this seemed appropriate. 
let propertAreaInput = document.getElementById("propertAreaInput");
let propertyTypeInput = document.getElementById("propertyTypeInput");
let propertyMaxOccupancyInput = document.getElementById("propertyMaxOccupancyInput");

let propertParkingYes = document.getElementById("propertyParkingYes");
let propertyParkingNo = document.getElementById("propertyParkingNo");

let propertyTransportYes = document.getElementById("propertyTransportYes");
let propertyTransportNo = document.getElementById("propertyTransportNo");

let propertyAvailableYes = document.getElementById("propertyAvailableYes");
let propertyAvailableNo = document.getElementById("propertyAvailableNo");

// rentalTerm is a drop down menu and I am not 100% certain that this is the best way, or correct ID location to get a value from a dropdown menu
// -- TESTING REQUIRED HERE ***
let rentalTerm = document.getElementById("rentalTerm"); // rental term drop down menu selection
// above are the inputs for adding a new property

/* when this button is pressed, it changes the display of 
addNewPropertyOuterDiv from none to flex */
let openAddPropertyDiv = document.getElementById("openAddPropertyDiv");

// this button should commit the new property to the constructor and array
// it should also clear the input fields and update the property page with the newly created property included
let addNewPropertyButton = document.getElementById("addNewPropertyButton");

// this is the div that needs to be changed from none to flex
let addNewPropertyOuterDiv = document.getElementById("addNewPropertyOuterDiv");


