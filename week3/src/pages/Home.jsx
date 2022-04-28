import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgHome } from "assets";

function Home() {
  return (
    <StyledHome>
      <header>
        <h1>개발자 밸런스 게임</h1>
        <h2>더 킹받는 상황을 골라주세요!</h2>
      </header>
      <img src={imgHome} alt="" />
      <Link to="/game">START</Link>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  header {
    background-color: #ffb1b7;
    text-align: center;
    padding: 3rem 0;

    h1 {
      font-size: 6rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 4rem;
    }
  }

  img {
    display: block;
    margin: 3rem auto;
  }

  a {
    display: block;
    margin: 0 auto;
    margin-bottom: 3rem;
    width: fit-content;
    background-color: #ffb1b7;
    border-radius: 1.4rem;
    padding: 2rem;
    font-size: 2rem;
    color: #fff;
  }
`;
