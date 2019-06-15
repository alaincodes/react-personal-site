import React from "react";
import styled from "styled-components";

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
    }
  }
`;

const Contact = () => {
  return (
    <ContactBox>
      <h1>CURRENT TECH AND STACK</h1>
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
