const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)


document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.container');

  function checkIfInView() {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      section.classList.add('active');
    } else {
      section.classList.remove('active'); // Optional: remove to make it a one-time animation
    }
  }

  window.addEventListener('scroll', checkIfInView);

  // Trigger the function on load
  checkIfInView();
});


document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.querySelector(".video-container .video");
  const controlButtons = document.querySelectorAll(".video-container .control-btn");

  controlButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Get the new video source from the button's data-src attribute
      const newVideoSrc = this.getAttribute("data-src");

      // Update the video source
      videoElement.setAttribute("src", newVideoSrc);

      // Reload the video and play it
      videoElement.load();
      videoElement.play();

      // Highlight the active control button
      controlButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
