textInput = document.querySelector(".inputs input"),
checkbtn = document.querySelector(".inputs button"),
infoText = document.querySelector(".info-text");
let filterInput;

checkbtn.addEventListener("click", () => {
    //spliting user input character and reversing them
    // and joing them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    if(filterInput != reverseInput)
    {
        return infoText.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome.`
    }
    infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome.`;
});

textInput.addEventListener("keyup", () => {
    //removing space and all special character from entered value
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkbtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkbtn.classList.remove("active");
});