import data from './brandsdata.js';

const more = document.querySelector('.see-more');

document.querySelector('.brands-founder').innerHTML = data
  .map((data) => `
    <div class="brands-name ${data.class} flex">
      <div class="brands-img">
        <img src='${data.image}' alt="" class="owner-img">
      </div>
      <div class="owner-data">
        <h3 class="name">${data.name}</h3>
        <p class="description">${data.desc}</p>
        <p class="product-desc">${data.about}</p>
      </div>
    </div>
  `)
  .join('');

more.addEventListener('click', () => {
  const brandNames = document.querySelectorAll('.hide');
  brandNames.forEach((brandName) => {
    brandName.classList.toggle('hidden');
  });
});
