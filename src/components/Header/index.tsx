import { useState } from "react";

import * as S from "./style.ts";

import LogoWhite from "../../assets/images/LogoWhite.png";
import Hamburger from "../../assets/icons/Hamburger.svg";

function Header() {
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <S.ContainerHeader>
      <S.ContentHeader showItems={showItems}>
        <img src={LogoWhite} alt="Logo White" />
        <img
          src={Hamburger}
          className="icon-burger"
          alt="Hamburger Icon"
          onClick={() => setShowItems(!showItems)}
        />

        <nav>
          <div className="indicate"></div>
          <menu>
            <li>
              <a href="about">홈화면</a>
            </li>
            <li>
              <a href="services">서비스</a>
            </li>
            <li>
              <a href="projects">가격표</a>
            </li>
            <li>
              <a href="contact">이용문의</a>
            </li>
          </menu>
        </nav>
        {/* 770px */}
      </S.ContentHeader>
    </S.ContainerHeader>
  );
}

export default Header;
