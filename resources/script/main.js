const selectOptions = document.querySelectorAll(".dropdown-item");
const block = document.querySelector(".offer-block-items");
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

function drowCards(data) {
  data.forEach((item, indx) => {
    let shopItem = `
    <a href="#" class="offer-block-item col-lg-3 col-md-6 col-sm-12">
      <div class="offer-block-wrap">
        <div class="image-item-wrap ${item.new ? `new` : ``} ${
      item.sold ? `sold` : ""
    }">
        <picture>
          <source srcset="${item.image}.webp" type="image/webp" />
          <source srcset="${item.image}.jpg" type="image/jpg" />
          <img
          src="${item.image}.jpg"
          alt="car ${item.name}"
          class="offer-block-image"
          loading="lazy"
        />
        </picture>
      </div>
        <div class="info-item-wrap">
          <div class="top-item-info">
            <span class="year-item">${item.year}</span>
            <h4 class="name-item">${item.name}</h4>
          </div>
          <div class="mid-item-info">
            <span class="feature-desc-item">${item.mileage.toLocaleString(
              "en-IN"
            )} km |</span>
            <span class="feature-desc-item"> ${item.transmission} |</span>
            <span class="feature-desc-item"> ${item.engine}</span>
          </div>
          <span class="price-item">$${item.price.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </a>`;
    block.innerHTML += shopItem;
  });
}
