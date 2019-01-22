// Create a global variable
  // let vid;
  // let img;
  // var learnMoreBtn;
  //
  // function setup() {
  //   createCanvas(windowWidth,windowHeight); // load the canvas
  //   background(0);
  //   vid = createVideo('Assets/bg-video.mp4'); // load the video (movie.mp4) and attach it to the global variable
  //   vid.play();  // play the video
  //   vid.hide();  // hide the video
  //   learnMoreBtn = loadImage('Assets/UI Elements/Learn More button.png');
  //
  //   //learn more button
  //
  // }
  //
  // function draw() {
  //   image(vid, 0, 0, windowWidth, windowHeight); // Draw the video in the canvas
  //   // background overlay, 4th value is opacity
  //   fill(0,0,0, 140);
  //   rect(0, 0, windowWidth, windowHeight);
  //
  // }
  //
  //
  //

  //start afresh!

  function myFunction() {
    var x = document.getElementById("nostalgia-overlay-card");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
