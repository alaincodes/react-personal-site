import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import bouteille from "../assets/bouteille.png";
import startup from "../assets/startup.png";
import alainv1 from "../assets/alainv1.png";
import clout from "../assets/clout.png";
import kudos from "../assets/kudos.png";
import fylo from "../assets/fylo.png";
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
      color: coral;
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
    config: { duration: 900 }
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
          <title>Alain Tran | Développeur ReactJS | Portfolio</title>
          <link
            rel="canonical"
            href="https://alaincodes.github.io/portfolio/"
          />
          <meta
            name="description"
            content="Alain Tran, JavaScript & ReactJS developer, portfolio."
          />
        </Helmet>
        <h1>Portfolio</h1>
        <PortfolioGrid>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://alaincodes.github.io/website-navbar-onscroll/"
          >
            <img
              src={bouteille}
              width="200"
              alt="bouteille. website pour former des sommelier"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://competent-murdock-45eab5.netlify.com/"
          >
            <img src={startup} width="200" alt="page d'accueil pour startup" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes/Shopping-website"
          >
            <img
              src={kudos}
              width="200"
              alt="shopping website ajouter et enlever des produits"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://clout.netlify.com/"
          >
            <img src={clout} width="200" alt="agence web, ReactJS, Sass" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://alaincodes.netlify.com/"
          >
            <img src={alainv1} width="200" alt="ancien site personnel" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://alaincodes.github.io/fylo-landing-page/"
          >
            <img src={fylo} width="200" alt="fylo challenge signup page" />
          </a>
        </PortfolioGrid>
      </Main>
    </animated.div>
  );
};

export default Portfolio;
