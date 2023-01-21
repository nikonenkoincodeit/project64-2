export function createProductsMarkup(data = []) {
  return data
    .map(
      ({ thumbnail, title, description, id }) => `<div class="col-lg-3">
        <div class="card" data-id="${id}">
          <img src="${thumbnail}" class="card-img-top" height="365"
            alt="iPhone 9">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>`
    )
    .join('');
}
