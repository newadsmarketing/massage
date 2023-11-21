import { useState } from "react";

import * as S from "./style.ts";

import LogoWhite from "../../assets/images/LogoWhite.svg";
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </menu>
        </nav>
        {/* 770px */}
      </S.ContentHeader>
    </S.ContainerHeader>
  );
}

export default Header;
