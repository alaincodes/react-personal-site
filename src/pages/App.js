import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./Home";
import English from "../components/English";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import styled from "styled-components";

const AppBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 8vh;

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavBar = styled.nav`
  display: flex;
  height: 10vh;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  h3 {
    margin-left: 1rem;
    font-size: 2rem;
    white-space: nowrap;
    a {
      text-decoration: none;
      color: #4a4a4a;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    li {
      padding: 1rem;
      a {
        text-decoration: none;
        color: #4a4a4a;
        font-weight: 600;
        &:hover {
          color: coral;
        }
      }
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin: 1rem auto;
    h3 {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    ul {
      li {
        margin: 0.2rem;
        padding: 0;
        button {
          margin: 0.5rem 0 1rem 0;
          padding: 0.3rem;
        }
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alain Tran | Développeur ReactJS</title>
        <link rel="canonical" href="https://alaincodes.github.io/" />
        <meta
          name="description"
          content="Alain Tran, JavaScript developer, learning and experiencing new things."
        />
      </Helmet>
      <AppBox>
        <NavBar>
          <h3>
            <Link to="/">Alain Tran</Link>
          </h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact/">Tech</Link>
            </li>
            <li>
              <Link to="/english/">EN</Link> / <Link to="/">FR</Link>{" "}
            </li>
          </ul>
        </NavBar>
      </AppBox>
      <Route path="/" exact component={Index} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/english/" component={English} />
      <Route path="/contact/" component={Contact} />
    </Router>
  );
}

export default App;
