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
