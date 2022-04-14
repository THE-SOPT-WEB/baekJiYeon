const $ = (selector) => document.querySelector(selector);

const orderBtn = $(".cart__order-btn");
const cancelBtn = $(".cart__cancel-btn");
const closeBtn = $(".modal__close-btn");
const modalBackground = $(".modal__background");
const modalBody = $(".modal__body");

orderBtn.addEventListener("click", () => {
  modalBackground.classList.add("show");
  modalBody.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalBackground.classList.remove("show");
  modalBody.classList.remove("show");
});
