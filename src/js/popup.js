document.addEventListener("click", function (e) {
  let sortPopup = document.getElementById("sortPopup");
  if (e.target.id != "popup" && e.target.id != "sortPopup") {
    sortPopup.style.display = "none";
  } else if (e.target.id == "popup") {
    sortPopup.style.display = sortPopup.style.display != "flex" ? "flex" : "none";
  }
});




