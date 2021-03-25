// DOM Variables
let currentDayEl = $('#currentDay');
let currentHour = moment().format("H")
let plannerEl = $('#planner');
const saveBtnEl = $('.saveBtn');

// JS Variables
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Function Definitions
function displayCalendar() {
    // For loop to create the blocks
    for (let i = 0; i < workHours.length; i++) {

        // I need to create elements
        let rowEl = $('<div>');
        let hourEl = $('<p>');
        let descriptionEl = $('<textarea>')
        let saveBtnEl = $('<button>');


        // I need to add classes to the elements
        rowEl.addClass('row time-block');
        hourEl.addClass('hour text-right col-1');
        descriptionEl.addClass('description w-100 p-3 col-10');
        descriptionEl.attr("data-index", i);
        saveBtnEl.attr("data-index", i);
        saveBtnEl.addClass('saveBtn col-1');

        // I need to add content to the elements
        hourEl.text(moment(workHours[i], "H").format("hA"));
        descriptionEl.text('');
        saveBtnEl.text('💾');

        // I need to append the elements somewhere
        plannerEl.append(rowEl);

        rowEl.append(hourEl);
        rowEl.append(descriptionEl);
        rowEl.append(saveBtnEl);

        if (currentHour == workHours[i]) {
            descriptionEl.addClass('present');
        } else if (currentHour < workHours[i]) {
            descriptionEl.addClass('future');
        } else {
            descriptionEl.addClass('past');
        }
    }
}

function init() {
    // Displays the current date in the header.
    currentDayEl.text(moment().format("dddd, MMMM Do"));

    displayCalendar();
}

function saveCalEvent(event) {
    let btnClicked = $(event.target);
    let sibs = btnClicked.siblings("textarea");
    let entry = sibs.val();

    let index = btnClicked.data();

    console.log(entry);
    console.log(index);
}

// // Event Listeners
plannerEl.on('click', '.saveBtn', saveCalEvent);

// Function Calls
init();