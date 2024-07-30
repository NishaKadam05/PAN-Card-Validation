function Panvalidation() {
    var Pannumber = document.PanValidation.PanNum.value;
    var panval = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (Pannumber == "") {
        alert("Please enter a value");
        return false;
    } else if (Pannumber.length != 10) {
        alert("Please enter valid PAN Number");
        return false;
    } else if (!panval.test(Pannumber)) {
        alert("Invalid Pan Number");
        return false;
    } else {
        alert("Pan Number is valid");
        return true;
    }
}