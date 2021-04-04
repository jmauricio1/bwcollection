window.addEventListener("scroll", (e) => {
  const target = document.querySelectorAll(".scroll");

  var currentOffset = window.pageYOffset;

  var w = window.innerWidth;
  var ratio = 1;
  var startingPos = 0;

  if (w <= 480) {
    startingPos = 800;
    ratio = 0.5;
  } else if (w <= 768) {
    startingPos = 1700;
    ratio = 0.75;
  } else if (w <= 1024) {
    startingPos = 2400;
  } else if (w <= 1440) {
    startingPos = 3100;
  } else {
    startingPos = 3400;
  }

  //This for loop handles the position rate of the first 5 images on the web page
  //depending on the screen size
  for (let i = 0; i < 5; i++) {
    if (currentOffset > 0 && currentOffset < 3400) {
      //console.log(w);
      let pos = (currentOffset) * target[i].dataset.rate * ratio;
      target[i].style.transform =
        "translate3d( 0px, " + pos + "px, 0px)";
    }
  }

  //These conditional statements handle the position rate of the last handful of images
  //depending on the screen size
  for (let i = 5; i < target.length; i++) {
    if (currentOffset >= startingPos) {
      let pos = (currentOffset - startingPos) * target[i].dataset.rate * ratio;
      target[i].style.transform =
        "translate3d( 0px, " + pos + "px, 0px)";
    }
  }
});