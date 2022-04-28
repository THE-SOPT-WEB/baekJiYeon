import { Link } from "react-router-dom";
import styled from "styled-components";

function Result() {
  return (
    <StyledResult>
      <header>
        <div>가장 킹받는 상황 1위</div>
        <div></div>
      </header>
      <StyledImgArea>
        <div>👑</div>
        <img src="" alt="" />
      </StyledImgArea>
      <StyledBtnGroup>
        <Link to="/">다시하기</Link>
        <button>공유하기</button>
      </StyledBtnGroup>
    </StyledResult>
  );
}

export default Result;

const StyledResult = styled.div`
  margin: 0 auto;
  text-align: center;

  header {
    padding: 3rem 0;
    color: #fff;
  }

  header > div:first-child {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  header > div:last-child {
    font-size: 6rem;
  }
`;

const StyledImgArea = styled.div`
  position: relative;
  margin: 3rem 0;
  width: 50rem;

  div {
    position: absolute;
    top: -8%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 8rem;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const StyledBtnGroup = styled.div`
  margin-bottom: 3rem;

  & > * {
    width: fit-content;
    border-radius: 5rem;
    padding: 2rem;
    font-size: 3rem;
    color: #222;
  }

  a {
    background-color: #ffb1b7;
  }

  button {
    background-color: #fff;
    margin-left: 2rem;
  }
`;
