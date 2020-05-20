import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/51208665?s=460&u=67719eabce9b8ee736cee355300994d586afe67a&v=4"
            alt="foto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalabble ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/51208665?s=460&u=67719eabce9b8ee736cee355300994d586afe67a&v=4"
            alt="foto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalabble ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/51208665?s=460&u=67719eabce9b8ee736cee355300994d586afe67a&v=4"
            alt="foto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalabble ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/51208665?s=460&u=67719eabce9b8ee736cee355300994d586afe67a&v=4"
            alt="foto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalabble ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
