import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/51208665?v=4"
            alt="Pedrohw12"
          />
          <div>
            <strong>pedrohw12/explace-backend</strong>
            <p> descrição do repositório </p>
          </div>
        </header>
        <ul>
          <li>
            <strong> 1880 </strong>
            <span>starts</span>
          </li>
          <li>
            <strong> 1880 </strong>
            <span>Forks</span>
          </li>
          <li>
            <strong> 1880 </strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={"lkj"}>
          <div>
            <strong>sdasas</strong>
            <p>asdsada</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
