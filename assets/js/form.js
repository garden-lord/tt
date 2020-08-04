const video = document.querySelector("video");
const vWidth = 1280;
const vHeight = 720;

function setScale() {
  const newWidth = window.innerWidth * vHeight / window.innerHeight;
  console.log(vHeight)
  console.log(newWidth)
  console.log(100 * newWidth / vWidth)
  video.style.color = 'red';
  video.style['max-width'] = `${100 * newWidth / vWidth}%`;
}

// setScale();
// window.addEventListener("resize", setScale);