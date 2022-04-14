import pic1 from "./assets/김규민.jpg";
import pic2 from "./assets/전희선.jpg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

function showModal(modalContent, keepOpen) {
  const modal = $(".modal");
  const modalBody = $("p.modal__body");

  modalBody.innerHTML = modalContent;
  modal.classList.remove("hide");

  if (keepOpen) return;

  if (currentStep !== quizList.length) {
    setTimeout(() => {
      modal.classList.add("hide");
    }, 500);
  }
}

function goNextStep(image) {
  currentStep++;

  // 게임이 끝난 상태
  if (currentStep === quizList.length) {
    showModal(`<a href="/">메인화면으로</a>`);
    return;
  }

  image.src = quizList[currentStep].src;
}

function attachEvent({ answer, image }) {
  answer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLElement) {
      const userAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (userAnswer == realAnswer) {
        showModal("나를 알아주다니 고마워💜");
        setTimeout(() => {
          goNextStep(image);
        }, 500);
      } else {
        showModal(`틀렸어 나는 ${userAnswer} 아니야 !! 🤬`);
      }
    }
  });
}

function initGame(score, image) {
  currentStep = 0;
  score.innerText = 0;
  image.src = quizList[currentStep].src;
}

function gameManager(gameInfo) {
  const { score, image } = gameInfo;
  initGame(score, image);
  attachEvent(gameInfo);
}

window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $("ul.answer__list"),
    image: $(".imageBoard > img"),
  });
};
