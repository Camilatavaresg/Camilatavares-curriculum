feather.replace()

const nextEl = document.getElementById('arrowRight');
const previousEl = document.getElementById('arrowLeft');
const slide = document.getElementById('portfolio-container');
var ismobile = window.matchMedia("only screen and (max-width: 1000px)");
let slideNum = 0;

nextEl.addEventListener('click', forwardSlide);
previousEl.addEventListener('click', previousSlide);

autoFlow()

function forwardSlide() {
     const slideWidth = slide.offsetWidth;
     slide.scrollLeft += slideWidth;
     slideNum = 1
     handleDots();
}

function previousSlide() {
     const slideWidth = slide.offsetWidth;
     slide.scrollLeft -= slideWidth;
     slideNum = 0
     handleDots();
}

function autoFlow() {
     let intervals = setInterval(() => {
          const slideWidth = slide.offsetWidth;
          const tamanho = slide.scrollLeft/slideWidth; 
          if (ismobile.matches) {
               clearInterval(intervals)
          } else if (tamanho > 0) {
               slide.scrollLeft = 0;
               slideNum = 0;
               handleDots()
          } else {
               slide.scrollLeft = slide.scrollLeft + slide.offsetWidth;
               slideNum = 1;
               handleDots() 
          }
     }, 5000);
}

function handleDots() {
     const dots = Array.from(document.getElementsByClassName('dots')) 
     dots.forEach(element => {
          element.classList.remove('activeDot')
     });
     if (slideNum > 1) slideNum = 1;
     if (slideNum < 0) slideNum = 0; 
     dots[slideNum].classList.add('activeDot');
}

