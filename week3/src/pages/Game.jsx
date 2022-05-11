import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  img72Inch,
  img8Inch,
  imgCopyAndPaste,
  imgGoogling,
  imgKeyboard,
  imgLeftHand,
  imgTouchPad,
  imgVoice,
} from 'assets';

function Game() {
  const navigate = useNavigate();
  const [matchIndex, setMatchIndex] = useState(0);
  const [matchItemList, setMatchItemList] = useState([
    { id: 1, img: imgGoogling, caption: '구글링 없이 개발하기' },
    { id: 2, img: imgCopyAndPaste, caption: '복붙 없이 개발하기' },
    { id: 3, img: img72Inch, caption: '1k 해상도 72인치 모니터로 코딩하기' },
    { id: 4, img: img8Inch, caption: '4k 해상도 8인치 모니터로 코딩하기' },
    { id: 5, img: imgKeyboard, caption: '천지인 자판으로 코딩하기' },
    { id: 6, img: imgVoice, caption: '음성인식으로 코딩하기' },
    { id: 7, img: imgLeftHand, caption: '왼손으로만 마우스 쓰기' },
    { id: 8, img: imgTouchPad, caption: '노트북 터치 패드만 쓰기' },
  ]);
  const [nextMatchItemList, setNextMatchItemList] = useState([]);

  const makeMatchList = (matchItemList) => {
    const matchList = [];
    for (let i = 0; i < matchItemList.length; i += 2) {
      matchList.push(matchItemList.slice(i, i + 2));
    }
    return matchList;
  };

  const [matchList, setMatchList] = useState(() => makeMatchList(matchItemList));

  const findRound = (length) => {
    const round = length === 1 ? '결승' : `${length * 2}강`;
    return round;
  };

  useEffect(() => {
    if (matchList.length === matchIndex) {
      if (matchList.length === 1) {
        navigate('/result', { state: { result: nextMatchItemList[0] } });
        return;
      }
      setMatchIndex(0);
      setMatchItemList([...nextMatchItemList]);
    }
  }, [matchIndex, matchList, nextMatchItemList, navigate]);

  useEffect(() => {
    setNextMatchItemList([]);
    setMatchList(() => makeMatchList(matchItemList));
  }, [matchItemList]);

  return (
    <StyledGame>
      <header>
        <h1>킹받는 개발 상황 {findRound(matchList.length)}</h1>
        <h2>
          {matchIndex + 1} / {matchList.length}
        </h2>
      </header>
      <main>
        {matchList[matchIndex]?.map((matchItem) => {
          const { id, img, caption } = matchItem;
          return (
            <figure
              key={id}
              onClick={() => {
                setNextMatchItemList([...nextMatchItemList, matchItem]);
                setMatchIndex((prev) => prev + 1);
              }}
            >
              <img src={img} alt={caption} />
              <figcaption>{caption}</figcaption>
            </figure>
          );
        })}
        <div>VS</div>
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
    overflow: hidden;

    div {
      position: absolute;
      left: 50%;
      top: calc(50% + 5rem);
      transform: translate(-50%, -100%);
      font-size: 10rem;
      color: #ffb1b7;
      -webkit-text-stroke: 5px #222;
      z-index: 1;
    }

    figure {
      position: relative;
      width: 50%;
      height: 100%;
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
      line-height: 140%;
      word-break: keep-all;
      text-align: center;
      color: #fff;
      -webkit-text-stroke: 3px #222;
    }
  }
`;
