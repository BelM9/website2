
function submitForm() {
    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    setTimeout(function() {
    alert('Form submitted!');
    submitButton.disabled = false;
    }, 1000);
    return false;
    }