import { imgCopyAndPaste, imgGoogling } from "assets";
import styled from "styled-components";

function Game() {
  return (
    <StyledGame>
      <header>
        <h1>킹받는 개발 상황 8강</h1>
        <h2>1 / 4</h2>
      </header>
      <main>
        <figure>
          <img src={imgGoogling} alt="" />
          <figcaption>구글링 없이 개발</figcaption>
        </figure>
        <div>VS</div>
        <figure>
          <img src={imgCopyAndPaste} alt="" />
          <figcaption>복붙 없이 개발</figcaption>
        </figure>
      </main>
    </StyledGame>
  );
}

export default Game;

const StyledGame = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    color: #fff;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 10rem;

    h1 {
      font-size: 6rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 3rem;
    }
  }

  main {
    position: relative;
    flex: 1;

    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -100%);
      font-size: 10rem;
      color: #ffb1b7;
      -webkit-text-stroke: 5px #222;
      z-index: 1;
    }

    figure {
      position: relative;
      width: 50%;
      height: calc(100% - 10rem);
      overflow: hidden;
      cursor: pointer;
    }

    figure:first-child {
      float: left;
    }

    figure:last-child {
      float: right;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    img:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }

    figcaption {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 6rem;
      word-break: keep-all;
      text-align: center;
      color: #fff;
      -webkit-text-stroke: 3px #222;
    }
  }
`;
