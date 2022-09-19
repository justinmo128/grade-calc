// Epic Ultimate CS10 Grade Calculator IPO by Justin Mo
// Using alert and prompt (GUI does not work)

// Input
let grade1 = +prompt('What is your Client-Side Scripting 1 grade?');
let grade2 = +prompt('What is your Structured Programming 1 grade?');
let grade3 = +prompt('What is your Structured Programming 2 grade?');
let grade4 = +prompt('What is your Client-Side Scripting 2 grade?');
let grade5 = +prompt('What is your Project A grade?');

// Process
let finalGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

// Output
if (finalGrade <= 100 && finalGrade >= 0) {
    alert(`Your final grade will be ${finalGrade}%.`);
} else {
    alert('Invalid.')
}