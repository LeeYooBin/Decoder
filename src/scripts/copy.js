const copyButton = document.querySelector("#copy-button");

copyButton.addEventListener("click", () => navigator.clipboard.writeText(result.innerHTML));