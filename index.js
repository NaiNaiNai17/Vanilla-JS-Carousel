const images = [...document.querySelectorAll("img")];
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowRight.addEventListener("click", () => {
  for (let [index, item] of images.entries()) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      item.classList.add("right");
      if (index === images.length - 1) {
        images[0].classList.add("active");
        break;
      }
      images[index + 1].classList.add("active");
      break;
    }
  }
  // images.forEach((item, index) =>{
  //     if(item.classList.contains("active")){
  //         item.classList.remove("active");
  //         console.log(item);
  //     }
  // })
});

arrowLeft.addEventListener("click", () => {
  for (let [index, item] of images.entries()) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      if (index === 0) {
        images[images.length - 1].classList.add("active");
        break;
      }
      images[index - 1].classList.add("active");
      break;
    }
  }
});
