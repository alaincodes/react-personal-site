import React from "react";
import styled from "styled-components";

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
`;

const PortfolioGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    border: 1px solid white;
    border-radius: 3px;
    margin: 1rem;
    padding: 4rem;
    transition: all 0.4s ease-in-out;
    &:hover {
      background: gold;
    }
  }
`;

const Portfolio = () => {
  return (
    <Main>
      <h1>Portfolio Page</h1>
      <PortfolioGrid>
        <div>Project</div>
        <div>Project</div>
        <div>Project</div>
        <div>Project</div>
        <div>Project</div>
        <div>Project</div>
      </PortfolioGrid>
    </Main>
  );
};

export default Portfolio;
