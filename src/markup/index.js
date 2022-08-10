export const createListBtn = (data = []) => {
  return data
    .map(
      (nameCat) => `<li class="item-btn" >
  <button type="button" class="btn btn-outline-primary" data-cat="${nameCat}">
    ${nameCat}
  </button></li>`
    )
    .join("");
};

export const createListCards = (data = []) => {
  return data.products.map(({ id, description, title, price, thumbnail }) => {
    return `<li class="card" data-id="${id}">
    <img
      src="${thumbnail}"
      class="card-img-top"
      alt="${title}"
      height="180"
      width="200"
    />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${description}
      </p>
      <div class="tile__price tile__price_color_red ng-star-inserted">
        <span class="tile__price-value"> ${price} </span
        ><span class="tile__price-currency">₴</span>
      </div>
    </div>
  </li>`;
  });
};

export const createAlert = (text = "") => {
  return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  ${text}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
</div>`;
};
