/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let loadCarousel = _ => {

  //Creating elements

  let carousel = document.createElement("div");

  let leftBtn = document.createElement("div");

  let img1 = document.createElement("img"); //try to make something loop through the files to make one of these for ever image if possible later

  let img2 = document.createElement("img");

  let img3 = document.createElement("img");

  let img4 = document.createElement("img");

  let rightBtn = document.createElement("div");

  //Adding classes

  carousel.classList.add("carousel");

  leftBtn.classList.add("left-button");

  rightBtn.classList.add("right-button");

  //Appending

  carousel.appendChild(leftBtn);

  carousel.appendChild(img1);

  carousel.appendChild(img2);

  carousel.appendChild(img3);

  carousel.appendChild(img4);

  carousel.appendChild(rightBtn);

  //Assigning image sources

  img1.src = "./assets/carousel/mountains.jpeg";

  img2.src = "./assets/carousel/computer.jpeg";

  img3.src = "./assets/carousel/trees.jpeg";

  img4.src = "./assets/carousel/turntable.jpeg";

  //Assigning variables for use in the button funcationality later

  img1.id = "img1";
  img2.id = "img2";
  img3.id = "img3";
  img4.id = "img4";

  return carousel;

}

document.querySelector(".carousel-container").appendChild(loadCarousel());


//Adding button functionality under here

let curIndex = 1; //Index to see current carousel order

//Setting two images to visible on page load

document.querySelector("#img1").style.display = "block";

document.querySelector("#img2").style.display = "block";


document.querySelector(".right-button").addEventListener("click", event => {

  let newIdSelect = ""; //this image's src will replace the first image's src in the carousel 
  let newIdSelect2 = ""; //this will do the same but for the second visible image spot in the carousel

  if (curIndex < 2) { //first click

    curIndex = 2;

    newIdSelect = "#img" + curIndex.toString(); 

    newIdSelect2 = "#img" + (curIndex + 1).toString(); 

  } else if (curIndex === 2) { //second click

      curIndex = 3;

      newIdSelect = "#img" + (3).toString(); 

      newIdSelect2 = "#img" + (4).toString();

    } else {

      newIdSelect = "#img" + (3).toString(); 

      newIdSelect2 = "#img" + (4).toString();

    }


  //Resetting all images display to none

  document.querySelector("#img1").style.display = "none";

  document.querySelector("#img2").style.display = "none";

  document.querySelector("#img3").style.display = "none";

  document.querySelector("#img4").style.display = "none";

  //Setting two main images to visible

  document.querySelector(newIdSelect).style.display = "block";

  document.querySelector(newIdSelect2).style.display = "block";

});




document.querySelector(".left-button").addEventListener("click", event => {

  let newIdSelect = ""; //this image's src will replace the first image's src in the carousel 
  let newIdSelect2 = ""; //this will do the same but for the second visible image spot in the carousel

  if (curIndex < 2) { //first click

    curIndex = 2;

    newIdSelect = "#img" + (4).toString(); 

    newIdSelect2 = "#img" + (1).toString(); 

  } else if (curIndex === 2) { //second click

      curIndex = 3;

      newIdSelect = "#img" + (3).toString(); 

      newIdSelect2 = "#img" + (4).toString();

    } else {

      newIdSelect = "#img" + (3).toString(); 

      newIdSelect2 = "#img" + (4).toString();

    }


  //Resetting all images display to none

  document.querySelector("#img1").style.display = "none";

  document.querySelector("#img2").style.display = "none";

  document.querySelector("#img3").style.display = "none";

  document.querySelector("#img4").style.display = "none";

  //Setting two main images to visible

  document.querySelector(newIdSelect).style.display = "block";

  document.querySelector(newIdSelect2).style.display = "block";

});