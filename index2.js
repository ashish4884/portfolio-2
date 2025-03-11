const openModal = document.querySelector(".openModal");
const popup = document.querySelector(".popup");
const closeModal = document.querySelector(".closeModal");
const overlay = document.querySelector(".overlay");

openModal.addEventListener(("click"), ()=>{

popup.style.display = "block";
overlay.style.display = "block";




// popup.classList.add("show"); // alternative method


});

closeModal.addEventListener("click", ()=>{

popup.style.display = "none";
overlay.style.display = "none";





// popup.classList.add("show"); // alternative method


});


overlay.addEventListener(("click"), ()=>{

    popup.style.display = "none";
    overlay.style.display = "none";







})


