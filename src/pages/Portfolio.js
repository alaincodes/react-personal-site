import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import netflix from "../assets/netflix.png";
import bike from "../assets/bike.png";
import uber from "../assets/uber.png";
import rock from "../assets/rock.png";
import kudos from "../assets/kudos.png";
import budget from "../assets/budget.png";
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
    h1 {
      margin: 1rem 1rem;
    }
  }
`;

const PortfolioGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  img {
    border-radius: 3px;
    margin: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      box-shadow: 10px 10px;
      color: gold;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    height: 80vh;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Portfolio = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 }
  });
  return (
    <animated.div style={props}>
      <Main>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Alain Tran | Web Developer | Portfolio</title>
          <link
            rel="canonical"
            href="https://alaincodes.github.io/portfolio/"
          />
          <meta
            name="description"
            content="Alain Tran, JavaScript & ReactJS developer, portfolio."
          />
        </Helmet>
        <h1>Recent Work (Github Links)</h1>
        <PortfolioGrid>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/Netflix-landing-clone"
          >
            <img src={netflix} width="200" alt="netflix clone" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/bike-app"
          >
            <img src={bike} width="200" alt="netflix clone" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/Shopping-website"
          >
            <img src={kudos} width="200" alt="netflix clone" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/rock-paper-scissorsv2"
          >
            <img src={rock} width="200" alt="netflix clone" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/uber-landing-clone"
          >
            <img src={uber} width="200" alt="netflix clone" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/budget-app-js"
          >
            <img src={budget} width="200" alt="netflix clone" />
          </a>
        </PortfolioGrid>
      </Main>
    </animated.div>
  );
};

export default Portfolio;
