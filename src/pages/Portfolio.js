import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";

const Main = styled.main`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
  }
`;

const PortfolioGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    border: 1px solid white;
    border-radius: 3px;
    margin: 1rem;
    padding: 4rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: gold;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    overflow: scroll;
  }
`;

const Portfolio = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 }
  });
  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alain Tran | Web Developer | Portfolio</title>
        <link rel="canonical" href="https://alaincodes.github.io/portfolio/" />
        <meta
          name="description"
          content="Alain Tran, JavaScript & ReactJS developer, portfolio."
        />
      </Helmet>
      <h1>Recent Work</h1>
      <animated.div style={props}>
        <PortfolioGrid>
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
        </PortfolioGrid>
      </animated.div>
    </Main>
  );
};

export default Portfolio;
