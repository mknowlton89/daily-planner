// DOM Variables
let currentDayEl = $('#currentDay');
let plannerEl = $('#planner');

// JS Variables
const workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Function Definitions
function init() {
    // Displays the current date in the header.
    currentDayEl.text(moment().format("dddd, MMMM Do"));

    // I need to create elements
    let rowEl = $('<div>');
    let hourEl = $('<p>');
    let descriptionEl = $('<textarea>')
    let saveBtnEl = $('<button>');

    // I need to add classes to the elements
    rowEl.addClass('row time-block');
    hourEl.addClass('hour text-right col-1');
    descriptionEl.addClass('past description w-100 p-3 col-10');
    saveBtnEl.addClass('saveBtn col-1');

    // I need to add content to the elements
    hourEl.text('11AM');
    descriptionEl.text('');
    saveBtnEl.text('💾');

    // I need to append the elements somewhere
    plannerEl.append(rowEl);

    rowEl.append(hourEl);
    rowEl.append(descriptionEl);
    rowEl.append(saveBtnEl);

}

// Event Listeners

// Function Calls
init();