
function toggleMenu(){
  document.querySelector("nav ul").classList.toggle("show");
}
function toggleDark(){
  document.body.classList.toggle("dark");
}
function openModal(t,d){
  modalTitle.innerText=t;
  modalText.innerText=d;
  overlay.classList.add("active");
}
function closeModal(){overlay.classList.remove("active");}
function validateForm(){
  if(!name.value||!email.value||!program.value){
    openModal("Error","Please fill all fields");
    return false;
  }
  openModal("Success","Form submitted successfully");
  return false;
}
let galleryItems=["Campus Life","Classrooms","Labs","Sports Day","Convocation","Events"];
let currentIndex=0;
function openGallery(i){
  currentIndex=i;
  galleryTitle.innerText=galleryItems[currentIndex];
  galleryOverlay.classList.add("active");
}
function closeGallery(){galleryOverlay.classList.remove("active");}
function nextPic(){
  currentIndex=(currentIndex+1)%galleryItems.length;
  galleryTitle.innerText=galleryItems[currentIndex];
}
function prevPic(){
  currentIndex=(currentIndex-1+galleryItems.length)%galleryItems.length;
  galleryTitle.innerText=galleryItems[currentIndex];
}
