const BtnAdd = document.getElementById("btn");
const Form = document.getElementById("form");
const Wrapper = document.getElementById("wrap");
const BtnClose = document.getElementById("btnClose")

BtnAdd.addEventListener("click", () => {
    Form.style.top="150px";
    Wrapper.classList.add("blur");
});

BtnClose.addEventListener("click", () => {
    Wrapper.classList.remove("blur");
    Form.style.top="-1500px";
});

