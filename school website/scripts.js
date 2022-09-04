// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

// // Some random colors
// const colors = ["#E2DCC8"];

// const numBalls = 500;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 95)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 110)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });