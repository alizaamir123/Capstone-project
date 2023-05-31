import data from './brandsdata.js';

document.querySelector('.brands-founder').innerHTML=data.map(
    (data)=>` <div class="brands-name flex">
    <div class="brands-img ">
        <img src='${data.image}' alt="" class="owner-img">
    </div>
    <div class="owner-data">
        <h3 class="name">${data.name}</h3>
        <p class="product-desc">${data.about}</p>
    </div>
</div>`,
)
.join('');