function showMonthName() {
  var monthNumber = document.getElementById("monthNumber").value;
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    var monthName = monthNames[monthNumber - 1];
    document.getElementById("pOutput").innerHTML =
      "Month name in English: " + monthName;
  } else {
    document.getElementById("pOutput").innerHTML =
      "Please enter a valid month number (1-12)!";
  }
}

// Go back function using browser history
function goBack() {
  window.history.back();
}
