import data from './brandsdata.js';

const more = document.querySelector('.see-more');

document.addEventListener('DOMContentLoaded', () => {
  const brandContainer = document.querySelector('.brands-founder');
  brandContainer.innerHTML = data
    .map(
      (data, index) => `
      <div class="brands-name flex ${index >= 2 ? 'hidden' : ''}">
        <div class="brands-img">
          <img src='${data.image}' alt="" class="owner-img">
        </div>
        <div class="owner-data">
          <h3 class="name">${data.name}</h3>
          <p class="description">${data.desc}</p>
          <p class="product-desc">${data.about}</p>
        </div>
      </div>
    `,
    )
    .join('');

  more.addEventListener('click', () => {
    const brandNames = document.querySelectorAll('.brands-name');
    brandNames.forEach((brandName, index) => {
      if (index >= 2) {
        brandName.classList.toggle('hidden');
      }
    });
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    const brandNames = document.querySelectorAll('.brands-name');
    brandNames.forEach((brandName) => {
      brandName.classList.remove('hidden');
    });
  }
});
