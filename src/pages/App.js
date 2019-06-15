import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import styled from "styled-components";

const AppBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 8vh;
`;

const NavBar = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      padding: 1rem;
      button {
        background: transparent;
        border: 2px solid black;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.5rem 0;
        margin: 0.5rem 0.2rem;
        width: 6rem;
        transition: all 0.4s linear;
        &:hover {
          background: gold;
        }
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <AppBox>
        <NavBar>
          <ul>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/portfolio/">
                <button>Portfolio</button>
              </Link>
            </li>
            <li>
              <Link to="/contact/">
                <button>More..</button>
              </Link>
            </li>
          </ul>
        </NavBar>
      </AppBox>
      <Route path="/" exact component={Index} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/contact/" component={Contact} />
    </Router>
  );
}

export default App;
