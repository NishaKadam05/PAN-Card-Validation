function validatePAN() {
    var input = document.getElementById("pan").value;

    if (input === "" || input == null) {
        alert("Please enter your PAN card number");
        return false;
    } else if (input.length !== 10) {
        alert("Please enter a valid PAN card number");
        return false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(input)) {
        alert("INVALID PAN NUMBER");
        return false;
    }

    alert("PAN number is valid");
    return true;
}
