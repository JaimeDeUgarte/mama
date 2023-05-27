var carouselItems = document.getElementsByClassName("carousel-item");
var currentSlide = 0;

// Mostrar el primer texto del carrusel
carouselItems[currentSlide].classList.add("active");

// Mover el carrusel a la izquierda
function moveCarouselLeft() {
  carouselItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentSlide].classList.add("active");
}

// Mover el carrusel a la derecha
function moveCarouselRight() {
  carouselItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add("active");
}

// Asignar eventos a los botones del carrusel
var btnLeft = document.querySelector(".carousel-btn-left");
var btnRight = document.querySelector(".carousel-btn-right");

btnLeft.addEventListener("click", moveCarouselLeft);
btnRight.addEventListener("click", moveCarouselRight);
