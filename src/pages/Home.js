import React from "react";
import styled from "styled-components";

const HomeBox = styled.main`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  h1 {
    color: gold;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 1rem;
    li {
      padding: 0 1rem;
      a {
        text-decoration: none;
      }
    }
  }
  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
    p {
      margin: 1rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeBox>
      <h1>Alain Tran</h1>
      <h2>Jr. JavaScript Developer</h2>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/alaincodes"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alaincodes"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/alaincodes"
          >
            Dev
          </a>
        </li>
      </ul>
      <p>
        Hello! I'm Alain an indie JavaScript dev from France, I like to code for
        web & mobile devices. I work with a lot of appetite, honesty and
        commitment. I also like create nice UI/UX Design and follow
        Accessibility guidelines.
      </p>
      <p>
        Outside of programming, I like to cook a lot.. and learn about the
        cooking culture, especially french dishes. I was working as a cook few
        years ago, at a two star restaurant located in Paris.
      </p>
      <p>
        Mostly coding stuff with HTML, Sass and JavaScript. Currently using
        React.
      </p>
    </HomeBox>
  );
};

export default Home;
