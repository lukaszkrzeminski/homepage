console.log("A więc zastanawiasz się po co Cię tu wezwałem...");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

changeBackgroundButton.addEventListener("click", () => {
    let background = document.querySelector(".container");
    let button = document.querySelector(".js-changeBackgroundButton")
    background.classList.toggle("newBackground");

    if (background.classList.contains("newBackground")) {
        button.innerText = "Zmień tło na jaśniejsze";
    }
    else {
        button.innerText = "Zmień tło na ciemniejsze";
    }
});