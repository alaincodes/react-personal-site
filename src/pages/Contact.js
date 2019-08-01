import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";

const ContactBox = styled.main`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  h1 {
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 1rem;
    max-width: 600px;
    a {
      text-decoration: none;
      color: coral;
    }
  }
  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    li {
      margin: 0.6rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 900;
    }
  }
  h5 {
    font-size: 0.9rem;
    a {
      color: black;
      text-decoration: none;
      color: coral;
      &:hover {
        color: #4a4a4a;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    h4 {
    }
    ul {
      flex-direction: column;
    }
  }
`;

const Contact = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });
  return (
    <animated.div style={props}>
      <ContactBox>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Alain Tran | Développeur ReactJS | Contact</title>
          <link rel="canonical" href="https://alaincodes.github.io/contact/" />
          <meta
            name="description"
            content="Alain Tran JavaScript and ReactJs, contact page, feel free to say Hi!"
          />
        </Helmet>
        <h1>Technologies</h1>
        <h4>
          Je tends à creer mes projets en suivant les critères{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jamstack.org/"
          >
            JAMstack
          </a>
          , essentiellement pour des raisons de performances et de sécurité.
        </h4>
        <ul>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>GraphQL</li>
        </ul>
        <h5>
          Site réalisé avec <a href="https://reactjs.org/">ReactJS</a> et{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.styled-components.com/"
          >
            Styled-components
          </a>
          .
        </h5>
      </ContactBox>
    </animated.div>
  );
};

export default Contact;
