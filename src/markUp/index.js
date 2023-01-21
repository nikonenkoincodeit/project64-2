
function createMarkup(arr = []) {

return arr.reduce((acc,{title,description,id,thumbnail})=>acc +`<div class="col-lg-3">
<div class="card" data-id="${id}">
  <img src="${thumbnail}" class="card-img-top" height="365"
    alt="${title}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
  </div>
</div>
</div>` ,'');
    
}


export {createMarkup};