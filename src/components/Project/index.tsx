import * as S from "./style.ts";

import ImageBottle from "../../assets/images/ImageBottle.svg";
import ImageCone from "../../assets/images/ImageCone.svg";
import ImageCutOrange from "../../assets/images/ImageCutOrange.svg";
import ImageMarshmallow from "../../assets/images/ImageMarshmallow.svg";

function About() {
  return (
    <>
      <S.ContainerGrid id="projects">
        <img src={ImageBottle} alt="" />
        <img src={ImageCutOrange} alt="" />
        <img src={ImageCone} alt="" />
        <img src={ImageMarshmallow} alt="" />
      </S.ContainerGrid>
    </>
  );
}

export default About;
