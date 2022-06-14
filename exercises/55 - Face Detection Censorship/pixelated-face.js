// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1920, height: 1080 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvas to be the same as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// face detection
async function detect() {
  // here seems not working TODO
  const faces = await faceDetector.detect(video);
  console.log(faces);

  // ask the browser when the next animation frame is, and tell it to run detect for us
  // recursion
  // faces.forEach(drawFace);
  // requestAnimationFrame(detect);
}

function drawFace(face) {
  // console.log(face);
  const { width, height, top, left } = face.boundingBox;
  // onsole.log({ width, height, top, left });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

populateVideo().then(detect); // promise based
