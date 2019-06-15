import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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
  }
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin: 0.6rem;
      font-size: 1.5rem;
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
  return (
    <ContactBox>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alain Tran | Web Developer | Contact</title>
        <link rel="canonical" href="https://alaincodes.github.io/contact/" />
        <meta
          name="description"
          content="Alain Tran JavaScript and ReactJs, contact page, feel free to say Hi!"
        />
      </Helmet>
      <h1>TECH AND STACK</h1>
      <h4>
        I tend to build most of my projects using the JAMstack's criteria.
      </h4>
      <ul>
        <li>HTML</li>
        <li>CSS/Sass</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>GraphQL</li>
      </ul>
    </ContactBox>
  );
};

export default Contact;
