import * as S from "./style.ts";
import ChevronDown from "../../assets/icons/ChevronDown.svg";

function Hero() {
  return (
    <S.ContainerHero>
      <span className="title">We are creatives</span>
      <img src={ChevronDown} className="icon-down" alt="ChevronDown" />
    </S.ContainerHero>
  );
}

export default Hero;
