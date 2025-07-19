let textinput = document.getElementById("textInput");
let charcount = document.getElementById("charcount");
let maxlength = 100;

textinput.addEventListener('input', () => {
    let length = textinput.value.length;
    charcount.textContent = `${length}/${maxlength}`

    if (length >= maxlength) {
        charcount.style.color = "red";
    } else {
        charcount.style.color = "green";
    }
})