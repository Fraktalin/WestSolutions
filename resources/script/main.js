const selectOptions = document.querySelectorAll(".dropdown-item");

for (const i of selectOptions) {
  i.addEventListener("click", setSelect);
}
function setSelect() {
  this.parentNode.parentNode.firstElementChild.innerText = this.innerText;
}
