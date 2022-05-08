const selectOptions = document.querySelectorAll(".dropdown-item");
let dataItems;
for (const i of selectOptions) {
  i.addEventListener("click", setSelect);
}
function setSelect() {
  this.parentNode.parentNode.firstElementChild.innerText = this.innerText;
}
function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("./resources/script/data.json", function (text) {
  dataItems = JSON.parse(text);
  drowCards(dataItems);
});

function drowCards(data) {}
