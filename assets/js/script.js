// DOM Variables
let currentDayEl = $('#currentDay');

// JS Variables

// Function Definitions
function init() {

    // Displays the current date in the header.
    currentDayEl.text(moment().format("dddd, MMMM Do"));
}

// Event Listeners

// Function Calls
init();