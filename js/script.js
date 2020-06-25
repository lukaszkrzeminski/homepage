{
    const sendDevMessage = () => {
        console.log("A więc zastanawiasz się po co Cię tu wezwałem...");
    }

    const changeBackground = () => {
        const background = document.querySelector(".container");
        const button = document.querySelector(".js-changeBackgroundButton")

        button.addEventListener("click", () => {

            background.classList.toggle("newBackground");

            if (background.classList.contains("newBackground")) {
                button.innerText = "Zmień tło na jaśniejsze";
            }
            else {
                button.innerText = "Zmień tło na ciemniejsze";
            }
        });
    }

    const init = () =>{
        sendDevMessage();

        changeBackground();
    }

    init();
}