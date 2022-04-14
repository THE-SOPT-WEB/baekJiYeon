const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const burgerCard = $All(".burger__card");
const cartList = $(".cart__list");
const orderBtn = $(".cart__order-btn");
const cancelBtn = $(".cart__cancel-btn");
const closeBtn = $(".modal__close-btn");
const modalBackground = $(".modal__background");
const modalBody = $(".modal__body");

burgerCard.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    console.log(e.target + index);
    addBurger(index);
  });
});

// 모달 보이게 설정
orderBtn.addEventListener("click", () => {
  modalBackground.classList.add("show");
  modalBody.classList.add("show");
});

// 모달 안 보이게 설정
closeBtn.addEventListener("click", () => {
  modalBackground.classList.remove("show");
  modalBody.classList.remove("show");
});

// 취소하기 버튼 누르면 장바구니 비우기
cancelBtn.addEventListener("click", () => {
  while (cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }
});

// 장바구니에 태그 동적으로 삽입하고 삭제하기
const addBurger = (index) => {
  const li = document.createElement("li");
  const name = document.createElement("span");
  const count = document.createElement("input");
  const price = document.createElement("span");
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "cart__item");
  name.setAttribute("class", "item__name");
  count.setAttribute("class", "item__count");
  count.setAttribute("type", "number");
  count.setAttribute("min", 1);
  price.setAttribute("class", "item__price");
  deleteBtn.setAttribute("class", "item__delete-btn");
  deleteBtn.innerText = "X";

  cartList.appendChild(li);
  li.appendChild(name);
  li.appendChild(count);
  li.appendChild(price);
  li.appendChild(deleteBtn);

  index++;

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};
