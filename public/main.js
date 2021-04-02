window.addEventListener("scroll", (e) => {
  const target = document.querySelectorAll(".scroll");

  var currentOffset = window.pageYOffset;

  var w = window.innerWidth;
  var ratio = 1;
  var startingPos = 0;

  //console.log(currentOffset);

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
  for (let i = 0; i < 5; i++) {
    if (currentOffset > 100 && currentOffset < 3400) {
      //console.log(w);
      let pos = (currentOffset - 100) * target[i].dataset.rate;
      target[i].style.transform =
        "translate3d( 0px, " + pos * ratio + "px, 0px)";
    }
  }

  //These conditional statements handle the position rate last handful of images
  //depending on the screeen size
  for (let i = 5; i < target.length; i++) {
    if (currentOffset >= startingPos) {
      let pos = (currentOffset - startingPos) * target[i].dataset.rate;
      target[i].style.transform =
        "translate3d( 0px, " + pos * ratio + "px, 0px)";
    }
  }
});

// window.onload = () =>{
//   document.querySelector(".about").addEventListener("click", function(){
//     document.querySelector(".about-page").style.width = "100%";
//   });
// }
