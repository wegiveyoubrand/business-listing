// Modal Script

const body = document.querySelector("body");
const Modal = document.querySelector("#modal");
const ModalTriggers = document.querySelectorAll(".modal-trigger");

const ModalClosers = document.querySelectorAll("#modalControlClose");

let ModalIsactive = 0;

ModalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", () => {
    Modal.classList.add("active");
    ModalIsactive = 1;
    setBodyPosition();
  });
});

ModalClosers.forEach((modalCloser) => {
  modalCloser.addEventListener("click", () => {
    Modal.classList.remove("active");
    ModalIsactive = 0;
    setBodyPosition();
  });
});

function setBodyPosition() {
  if (ModalIsactive) {
    body.classList.add("fixed");
  } else {
    body.classList.remove("fixed");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ModalIsactive = 1;
  setBodyPosition();
  Modal.classList.add("active");
});
