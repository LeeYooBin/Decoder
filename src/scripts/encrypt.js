const input = document.querySelector("#text-input");
const result = document.querySelector("#text-result");
const encryptButton = document.querySelector("#encrypt");

encryptButton.addEventListener("click", () => {
    if(input.value) result.innerHTML = input.value.replace(/e/g, "enter")
                                                  .replace(/i/g, "imes")
                                                  .replace(/a/g, "ai")
                                                  .replace(/o/g, "ober")
                                                  .replace(/u/g, "ufat");
});