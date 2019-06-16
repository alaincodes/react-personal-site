import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

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
    font-size: 1.1rem;
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
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 }
  });
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
      <animated.p style={props}>
        Hello! I'm Alain an indie JavaScript dev from France, I like to code for
        web & mobile devices. I work with a lot of appetite, honesty and
        commitment. I also like create nice UI/UX Design and follow
        Accessibility guidelines.
      </animated.p>
      <animated.p style={props}>
        Outside of programming, I like to cook a lot.. and learn about the
        cooking culture, especially french dishes. I was working as a cook few
        years ago, at a two star restaurant located in Paris.
      </animated.p>
      <animated.p style={props}>
        Mostly coding stuff with HTML, Sass and JavaScript. Currently using
        React.
      </animated.p>
    </HomeBox>
  );
};

export default Home;
