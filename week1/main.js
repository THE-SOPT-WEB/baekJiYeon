const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const burgerCard = $All(".burger__card");
const cartList = $(".cart__list");
const orderBtn = $(".cart__order-btn");
const cancelBtn = $(".cart__cancel-btn");
const closeBtn = $(".modal__close-btn");
const modalBackground = $(".modal__background");
const modalBody = $(".modal__body");
let sum = 0;

const parsePriceToNumber = (price) => {
  const removedComma = price.slice(0, -1).replace(/\D/g, "");
  return +removedComma;
};

burgerCard.forEach((card) => {
  card.addEventListener("click", (e) => {
    const burgerName = card.querySelector(".burger__name").innerText;
    const burgerPrice = card.querySelector(".burger__price").innerText;
    addBurger(burgerName, burgerPrice);
    sum += parsePriceToNumber(burgerPrice);
    changeSumText();
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
  sum = 0;
  changeSumText();
});

// 장바구니에 태그 동적으로 삽입하고 삭제하기
const addBurger = (burgerName, burgerPrice) => {
  const li = document.createElement("li");
  const name = document.createElement("span");
  const count = document.createElement("input");
  const price = document.createElement("span");
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "cart__item");

  name.setAttribute("class", "item__name");
  name.innerText = burgerName;

  count.setAttribute("class", "item__count");
  count.setAttribute("type", "number");
  count.setAttribute("min", 1);
  count.setAttribute("value", 1);

  price.setAttribute("class", "item__price");
  price.innerText = burgerPrice;

  deleteBtn.setAttribute("class", "item__delete-btn");
  deleteBtn.innerText = "X";

  cartList.appendChild(li);
  li.appendChild(name);
  li.appendChild(count);
  li.appendChild(price);
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    const itemPrice = li.querySelector(".item__price").innerText;
    li.remove();
    sum -= parsePriceToNumber(itemPrice);
    changeSumText();
  });
};

const changeSumText = () => {
  $(".cart__sum span").innerText = sum ? `${sum.toLocaleString()}원` : "0원";
};
