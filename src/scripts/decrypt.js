const decryptButton = document.querySelector("#decrypt");

decryptButton.addEventListener("click", () => {
    if(input.value) result.innerHTML = input.value.replace(/enter/g, "e")
                                                  .replace(/imes/g, "i")
                                                  .replace(/ai/g, "a")
                                                  .replace(/ober/g, "o")
                                                  .replace(/ufat/g, "u");
});

