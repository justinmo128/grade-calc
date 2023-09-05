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
    document.getElementById("grade-out").innerHTML = finalGrade;
    if (finalGrade <= 10) {
        document.getElementById("extra-message").innerHTML = "noob";
    } 
    else if (finalGrade >= 95) {
        document.getElementById("extra-message").innerHTML = "Good job!";
    } else {
        document.getElementById("extra-message").innerHTML = "";
    }
    document.getElementById("letter-grade-1").innerHTML = getLetterGrade(grade1);
    document.getElementById("letter-grade-2").innerHTML = getLetterGrade(grade2);
    document.getElementById("letter-grade-3").innerHTML = getLetterGrade(grade3);
    document.getElementById("letter-grade-4").innerHTML = getLetterGrade(grade4);
    document.getElementById("letter-grade-5").innerHTML = getLetterGrade(grade5);
    document.getElementById("letter-grade-final").innerHTML = getLetterGrade(finalGrade);
}

function getLetterGrade(percentage) {
    if (percentage >= 90) return "A";
    else if (percentage >= 75) return "B";
    else if (percentage >= 60) return "C";
    else if (percentage >= 50) return "D";
    else return "F";
}