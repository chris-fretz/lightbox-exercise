const modalBtns = document.querySelectorAll("#heroItems .btn");
const lightbox = document.querySelector(".lightbox-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtns.forEach(element => {
  element.addEventListener("click", openLightbox);
});

closeBtn.addEventListener("click", closeLightbox);

function changeHeaderColor(color) {
  document.querySelector("header").style.backgroundColor = color;
}1

/*
  @NOTES 

  # MODAL - SPLITTING LOGIC AND EVENT HANDLING

  The event listener above will fire off everytime a user..
    1. Hits any key on their keyboard AND
    2. If they hit ESC, it may do unneccesary processing because the lightbox may not be open.

  The ideal solution to this is to add and remove the event listener as needed.
  Let's change this up a bit and add functions for opening and closing the lightbox first.
  I've added some console.logs to illustrate the behavior going on.



  Next, let's look at the changeHeaderColor fn and how that could be handled differently.
  This change will affect the index.html and style.css but i will put all of my comments here to make it easier to follow.
  
  The way the we usually handle these things is to render all of the markup needed in items and add/remove active classes to the index as needed/click.

  At this point we could start to seperate our logic even futher by having different modals or modal content dependant on the index.

  I hope these notes help out, feel free to ask any further questions if needed.
*/

// START COLOR CODE
const heroTriggers = document.querySelectorAll("#heroTriggerItems .hero-trigger-item");

heroTriggers.forEach(element => {
  element.addEventListener('click', handleHeroTriggerItemClick);
});

function handleHeroTriggerItemClick(event) {
  const index = this.getAttribute('data-index');
  const color = this.getAttribute('data-color');

  // at this point you could either do the way you had with the background color
  // or set the is-active class via the index like so

  console.log(`clicked on index of ${index} & color ${color}`)

  deactivateHeroItems();
  activateHeroItem(index);
}

function activateHeroItem(index) {
  const heroItem = document.querySelector(`#heroItems .hero-item-${index}`);

  heroItem.classList.add('is-active')
}

function deactivateHeroItems() {
  const heroItems = document.querySelectorAll("#heroItems .hero-item");

  heroItems.forEach(element => {
    element.classList.remove('is-active');
  });
}
// END COLOR CODE

// START LIGHTBOX CODE
function openLightbox() {
  addLightboxListener();
  
  lightbox.classList.add("open-lightbox");
}

function closeLightbox() {
  removeLightboxListener();

  lightbox.classList.remove("open-lightbox");
}

function handleLightboxListener(event) {
  console.log("handling lightbox listener");

  if (event.key === "Escape") {
    console.log("user hit escape, close the lightbox");
    closeLightbox();
  }
}

function addLightboxListener() {
  console.log("adding lightbox listener");
  window.addEventListener("keydown", handleLightboxListener, false);
}

function removeLightboxListener() {
  console.log("removing lightbox listener");
  window.removeEventListener("keydown", handleLightboxListener, false);
}
// END LIGHTBOX CODE