function ageCalculator() {
    // Get the birth date from the input field
    let birthDay = document.getElementById("birthday").value;

    // Check if the birth date is entered
    if (!birthDay) {
        alert("Please enter a date.");
        return false;
    }

    // Convert birth date and current date to Date objects
    let date1 = new Date(birthDay);
    let date2 = new Date();

    // Calculate the difference in years, months, and days
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    // Check if the birth date is in the future
    if (date1 > date2) {
        alert("Please enter a valid date.");
        return false;
    }

    // Adjust the years and months if necessary
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust the days if necessary
    if (days < 0) {
        let prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    // Display the calculated age in the respective HTML elements
    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;

    return false;
}
