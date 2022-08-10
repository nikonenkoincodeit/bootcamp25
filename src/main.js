import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { getData } from "./service";
import { listBTNsRef, listCardsRef, formRef, alertBoxRef } from "./refs";
import { createListBtn, createListCards, createAlert } from "./markup";
import { addMarkup } from "./helpers";

const LIMIT_SKIP = "?limit=20&skip=0";

const toggleAlert = (textError = "") => {
  const alertMarkup = createAlert(textError);
  addMarkup(alertMarkup, alertBoxRef);
  setTimeout(() => {
    closeAlert();
  }, 3000);
};

const getDataProduct = (path = "", createMarkup, addMarkup, element) => {
  if (!path) return;

  getData(path)
    .then((data) => {
      const markup = createMarkup(data);
      ///console.log("markup :>> ", markup);
      addMarkup(markup.length ? markup : " Ops!", element);
      // console.log("data :>> ", data);
    })
    .catch((error) => {
      console.log("error :>> ", error);
      toggleAlert(error);
    });
};

const onClickBtn = (e) => {
  const {
    dataset: { cat },
  } = e.target;

  if (!cat) return;

  getDataProduct(
    "products/category/" + cat + LIMIT_SKIP,
    createListCards,
    addMarkup,
    listCardsRef
  );
};

const onSubmitForm = (e) => {
  e.preventDefault();
  const {
    elements: { search },
  } = e.target;

  const value = search.value.trim();
  if (!value) return;
  console.log("value :>> ", value);
  getDataProduct(
    "products/search" + LIMIT_SKIP + "&q=" + value,
    createListCards,
    addMarkup,
    listCardsRef
  );
  e.target.reset();
};

const closeAlert = () => {
  addMarkup("", alertBoxRef);
};

const onClickCard = (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const {
    dataset: { id },
  } = card;
  if (!id) return;
  console.log("e.target :>> ", id);
};

const init = () => {
  getDataProduct(
    "products/categories" + LIMIT_SKIP,
    createListBtn,
    addMarkup,
    listBTNsRef
  );
  getDataProduct(
    "products" + LIMIT_SKIP,
    createListCards,
    addMarkup,
    listCardsRef
  );
};

init();

formRef.addEventListener("submit", onSubmitForm);
listBTNsRef.addEventListener("click", onClickBtn);
alertBoxRef.addEventListener("click", closeAlert);
listCardsRef.addEventListener("click", onClickCard);
