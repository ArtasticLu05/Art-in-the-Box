document.querySelector('.prev').addEventListener('click', function() {
  document.querySelector('.carousel-inner').style.transform += 'translateX(-100%)';
});

document.querySelector('.next').addEventListener('click', function() {
  document.querySelector('.carousel-inner').style.transform += 'translateX(100%)';
});


