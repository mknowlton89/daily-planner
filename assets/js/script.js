// DOM Variables
let currentDayEl = $('#currentDay');
let currentHour = moment().format("H")
let plannerEl = $('#planner');

console.log(currentHour);
// console.log(moment(currentHour, "H").format("h"));


// JS Variables
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Function Definitions
function init() {
    // Displays the current date in the header.
    currentDayEl.text(moment().format("dddd, MMMM Do"));


    // For loop to create the blocks
    for (let i = 0; i < workHours.length; i++) {

        // I need to create elements
        let rowEl = $('<div>');
        let hourEl = $('<p>');
        let descriptionEl = $('<textarea>')
        let saveBtnEl = $('<button>');
        let formattedHour = moment(workHours[i], "H").format("H");

        console.log("Formatted hour is: " + formattedHour);
        console.log("workHours is: " + workHours[i]);

        // I need to add classes to the elements
        rowEl.addClass('row time-block');
        hourEl.addClass('hour text-right col-1');
        descriptionEl.addClass('description w-100 p-3 col-10');
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

        if (currentHour === formattedHour) {
            descriptionEl.addClass('present');
        } else if (currentHour < formattedHour) {
            descriptionEl.addClass('future');
        } else if (currentHour > formattedHour) {
            descriptionEl.addClass('past');
        }
    }



    // // I need to create elements
    // let rowEl = $('<div>');
    // let hourEl = $('<p>');
    // let descriptionEl = $('<textarea>')
    // let saveBtnEl = $('<button>');

    // // I need to add classes to the elements
    // rowEl.addClass('row time-block');
    // hourEl.addClass('hour text-right col-1');
    // descriptionEl.addClass('past description w-100 p-3 col-10');
    // saveBtnEl.addClass('saveBtn col-1');

    // // I need to add content to the elements
    // hourEl.text('11AM');
    // descriptionEl.text('');
    // saveBtnEl.text('💾');

    // // I need to append the elements somewhere
    // plannerEl.append(rowEl);

    // rowEl.append(hourEl);
    // rowEl.append(descriptionEl);
    // rowEl.append(saveBtnEl);

}

// Event Listeners

// Function Calls
init();