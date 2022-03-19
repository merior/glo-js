
const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescr = document.querySelectorAll(".design__descr");
const tabImg = document.querySelectorAll(".design-images");
const tabMainImg = document.querySelectorAll(".design-block__img");
const tabTittles = document.querySelectorAll(".design__title");

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", function (event) {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescr, dataValue);
    changeContent(tabImg, dataValue);
    changeContent(tabMainImg, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });

    tabTittles.forEach((title, indexTitle) => {
      if (index === indexTitle) {
        title.classList.remove("hidden");
      } else {
        title.classList.add("hidden");
      }
    });
  });
});