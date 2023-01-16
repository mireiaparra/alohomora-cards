"use strict";

function resetInput() {
  data.palette = '1';  
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value= '';
  phoneInput.value = '';
  linkedinInput.value = '';
  githubInput.value = ''; 
  profileImage.style.backgroundImage = "";
  profilePreview.style.backgroundImage = "";

}

function handleClickReset(event) {
  event.preventDefault();
  resetInput();
  updatePreview();
  disableSectionShare();
  enableCreateBtn();
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-1`);
  paletteOne.checked = true;
  saveInLocalStorage(data);
}

resetBtn.addEventListener("click", handleClickReset);
