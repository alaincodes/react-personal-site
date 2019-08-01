import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import alainPic from "../assets/alaintran.jpg";

const HomeBox = styled.main`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  .alainPic {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }
  h2 {
    color: #4a4a4a;
    text-align: center;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 1.5rem auto;
    li {
      padding: 0 1rem;
      i {
        color: #4a4a4a;
        font-size: 2rem;
        transition: all 0.3s ease-in-out;
        &:hover {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
          opacity: 0.8;
          color: coral;
        }
      }
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.4;
    color: #4a4a4a;
    font-weight: 500;
  }
  strong {
    color: coral;
    font-size: 1.3rem;
  }
  .email {
    color: coral;
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

const English = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });
  return (
    <animated.div style={props}>
      <HomeBox>
        <img className="alainPic" src={alainPic} alt="photographie d'Alain" />
        <h2>Hello, I'm Alain, Junior Front-end Developer.</h2>
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
        </ul>
        <p>
          I like to code for <strong>web & mobile</strong> devices using{" "}
          <strong>ReactJS</strong>. I work with a lot of appetite, honesty and
          commitment. I also like create nice
          <strong> UI/UX Design</strong> and follow{" "}
          <strong>Accessibility</strong> guidelines.
        </p>
        <p>
          Outside of programming, you will probably see me reading, watching
          cooking stuff or in front of the stove, I was working as a cook in
          Paris years ago !!
        </p>
        <p>
          I'm <strong>available</strong> to complete your team and cool
          freelance/remote opportunities, hit me up on{" "}
          <a
            className="email"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/alaincodes"
          >
            Twitter
          </a>{" "}
          for future projects!
        </p>
      </HomeBox>
    </animated.div>
  );
};

export default English;
