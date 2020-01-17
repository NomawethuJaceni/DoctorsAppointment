// Disabling submit button on homepage
function enableButton() {
    var selectedItem = document.getElementById('time');
    var btnElement = document.getElementById('button');
    btnElement.disabled = !selectedItem.value;
}
