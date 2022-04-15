const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const burgerCardList = $All(".burger__card");
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

// 누적 금액 변동
const changeSum = () => {
  const cartItemList = $All(".cart__item");
  const priceList = [];
  cartItemList.forEach((item) => {
    const price = parsePriceToNumber(
      item.querySelector(".item__price").innerText
    );
    priceList.push(price);
  });
  const sum = priceList.reduce((acc, cur) => acc + cur, 0);
  $(".cart__sum span").innerText = `${sum.toLocaleString()}원`;
};

burgerCardList.forEach((card) => {
  card.addEventListener("click", (e) => {
    const burgerName = card.querySelector(".burger__name").innerText;
    const burgerPrice = card.querySelector(".burger__price").innerText;
    addBurger(burgerName, burgerPrice);
    changeSum();
  });
});

// 모달 보이게 설정
orderBtn.addEventListener("click", () => {
  if (sum) {
    modalBackground.classList.add("show");
    modalBody.classList.add("show");
  } else alert("장바구니가 비어있어서 주문할 수 없어요!");
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
  changeSum();
});

// 장바구니에 태그 동적으로 삽입하고 삭제하기
const addBurger = (burgerName, burgerPrice) => {
  const cartItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  const countInput = document.createElement("input");
  const priceSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");

  cartItem.setAttribute("class", "cart__item");

  nameSpan.setAttribute("class", "item__name");
  nameSpan.innerText = burgerName;

  countInput.setAttribute("class", "item__count");
  countInput.setAttribute("type", "number");
  countInput.setAttribute("min", 1);
  countInput.setAttribute("value", 1);

  priceSpan.setAttribute("class", "item__price");
  priceSpan.innerText = burgerPrice;

  deleteBtn.setAttribute("class", "item__delete-btn");
  deleteBtn.innerText = "X";

  cartList.appendChild(cartItem);
  cartItem.appendChild(nameSpan);
  cartItem.appendChild(countInput);
  cartItem.appendChild(priceSpan);
  cartItem.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    cartItem.remove();
    changeSum();
  });
};
