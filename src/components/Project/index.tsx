import * as S from "./style.ts";

import ImageBottle from "../../assets/images/ImageBottle.jpg";
import ImageCone from "../../assets/images/ImageCone.jpg";
import ImageCutOrange from "../../assets/images/ImageCutOrange.jpg";
import ImageMarshmallow from "../../assets/images/ImageMarshmallow.jpg";

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
