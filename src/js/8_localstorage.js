"use strict";
function saveInLocalStorage(data) {
  localStorage.setItem("dataFromForm", JSON.stringify(data));
  //cada vez que se escribe algo en el input se guarda en el localStorage en la variable "dataFromForm". Como estas variables solo guardan string, hay que hacer stringify. Ahora cuando se recargue la página se queda el valor guardado en el localStorage, aunque aún no se pone en el input. Para eso habrá que guardarlo como objeto local:
}

function getLocalStorageData() {
  data = JSON.parse(localStorage.getItem("dataFromForm"));
  if (data.palette === '1') {
    paletteOne.checked = true;
    previewCard.classList.remove(`colorsPalette-2`);
    previewCard.classList.remove(`colorsPalette-3`);
    previewCard.classList.add(`colorsPalette-1`);
  } else if (data.palette === '2') {
    paletteTwo.checked = true;
    previewCard.classList.remove(`colorsPalette-1`);
    previewCard.classList.remove(`colorsPalette-3`);
    previewCard.classList.add(`colorsPalette-2`);
  } else {
    paletteThree.checked = true;
    previewCard.classList.remove(`colorsPalette-1`);
    previewCard.classList.remove(`colorsPalette-2`);
    previewCard.classList.add(`colorsPalette-3`);
  }
    nameInput.value = data.name;
    jobInput.value = data.job;
    updatePreview();
  
  //Esto habrá que borrarlo cuando le demos a reset
  }


if (JSON.parse(localStorage.getItem('dataFromForm'))) {
  getLocalStorageData();
}
