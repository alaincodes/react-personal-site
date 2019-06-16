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
    color: rgb(3, 3, 3);
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 1rem;
    li {
      padding: 0 1rem;
      i {
        color: black;
        font-size: 2rem;
        transition: all 0.3s ease-in-out;
        &:hover {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
          opacity: 0.8;
          color: gold;
        }
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

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
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
    <animated.div style={props}>
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
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/alaincodes"
            >
              <i class="fab fa-github-alt" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alaincodes/"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
        <p>
          Hello! I'm Alain an indie JavaScript dev from France, I like to code
          for web & mobile devices. I work with a lot of appetite, honesty and
          commitment. I also like create nice UI/UX Design and follow
          Accessibility guidelines.
        </p>
        <p>
          Outside of programming, I like to cook a lot.. and learn about the
          cooking culture. I was working as a cook few years ago, at a two star
          restaurant located in Paris.
        </p>
        <p>
          Mostly coding stuff with HTML, Sass and JavaScript. Currently using
          React.
        </p>
      </HomeBox>
    </animated.div>
  );
};

export default Home;
