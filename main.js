// Epic Ultimate CS10 Grade Calculator IPO by Justin Mo

document.getElementById("calcButton").addEventListener("click", calcGrades);

function calcGrades() {
    // Input
    let grade1 = +document.getElementById("grade1-in").value;
    let grade2 = +document.getElementById("grade2-in").value;
    let grade3 = +document.getElementById("grade3-in").value;
    let grade4 = +document.getElementById("grade4-in").value;
    let grade5 = +document.getElementById("grade5-in").value;

    // Process
    let finalGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

    // Output
    // Does not check if grade1 through grade5 is between 0 and 100...
    // ..because that would be too much typing.
    if (finalGrade <= 10) {
        document.getElementById("grade-out").innerHTML = finalGrade
        document.getElementById("extra-message").innerHTML = "noob"
    } 
    else if (finalGrade >= 95) {
        document.getElementById("grade-out").innerHTML = finalGrade
        document.getElementById("extra-message").innerHTML = "Good job!"
    } 
    else if (finalGrade < 95 && finalGrade > 10) {
        document.getElementById("grade-out").innerHTML = finalGrade
    } 
    else {
        document.getElementById("grade-out").innerHTML = "Invalid"
        document.getElementById("extra-message").innerHTML = "Check to make sure you inputted your values correctly."
    }
}