    
const listItems = document.querySelectorAll('.list li');
const mainImage = document.getElementById('mainImage');
const specText = document.getElementById("specificity");

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img');
    const text = item.getAttribute("data-text");

    mainImage.src = imgSrc;
    mainImage.style.display = 'block';
    specificity.style.display = 'block';
    
  });
});

// window.onload = function(){
//   let onLoadImage = document.createElement('img');
//   img.src = /assets/pngwing.com.png;
// }
// let container = document.getElementById('display');
// container.appendChild(onLoadImage);

// let audi = getElementById('audi');
// function audi(){
//     audi.innerHTML = `come nebbe`
// }