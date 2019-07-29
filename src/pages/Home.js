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
    line-height: 1.4;
  }
  strong {
    background: linear-gradient(to right, #067221 0%, #f55d9c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3rem;
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
        <h2>Développeur JavaScript Jr.</h2>
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
          Salut, je suis Alain, je développe des applications{" "}
          <strong>Web et Mobile</strong>. Je travaille avec beaucoup d'appétit,
          d'honnêté et d'engagement. J'attache beaucoup d'intérêt aux
          <strong> design UI/UX</strong> et à l'<strong>Accessibilité</strong>.
        </p>
        <p>
          Anciennement cuisinier à Paris, quand je ne code pas, vous me
          trouverez certainement entrain de regarder ou de lire des
          livres/vidéos de cuisine ou simplement derrière les fourneaux.
        </p>
        <p>
          J'utilise principalement du <strong>HTML</strong>,{" "}
          <strong>CSS/Sass</strong>, <strong>JavaScript</strong> dans mes
          projets et dernièrement <strong>ReactJS</strong>.
        </p>
        <p>
          Je suis disponible pour completer votre équipe et/ou mission de
          freelance, n'hésistez pas à me contacter!
        </p>
      </HomeBox>
    </animated.div>
  );
};

export default Home;
