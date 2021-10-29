const BtnAdd = document.getElementById("btn");
const Form = document.getElementById("form");
const Wrapper = document.getElementById("wrap");
const BtnClose = document.getElementById("btnClose")

BtnAdd.addEventListener("click", () => {
    Form.style.top="80px";
    Wrapper.classList.add("blur");

    if (window.matchMedia("(max-width: 1440px)").matches) {
        Form.style.top="7px"
    }
});

BtnClose.addEventListener("click", () => {
    Wrapper.classList.remove("blur");
    Form.style.top="-1500px";
});
