// Remaining TIme For Sale
const timer = document.getElementById('timer');

function countdown() {
  const now = new Date();
  const eventDate = new Date('2024-02-11'); // Set your event date here
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  timer.textContent = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(countdown, 1000);

countdown();


// To change images regualarly....
 const imagesContainer = document.querySelector("#about #bottom #images");
 const images = imagesContainer.querySelectorAll("img");

 const changeImage = ()=> {
  const currentImage = imagesContainer.querySelector(".show");

  const currentImageIndex = Array.from(images).indexOf(currentImage);

 const nextIndex = (currentImageIndex + 1) % images.length;
currentImage.classList.remove('show');
currentImage.classList.add('hide');

images[nextIndex].classList.remove('hide');
images[nextIndex].classList.add('show');



};

setInterval(changeImage, 2000);

// Animations
Shery.textAnimate(" a, .right h1" , {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.makeMagnet(".right" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageEffect(".relative img", {
  style: 1,
  config: {"a":{"value":0.5,"range":[0,30]},"b":{"value":0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

});

// Submit Alert
document.querySelector("#registration-form").addEventListener("submit", ()=> {
  alert("Registration Succesful")
})