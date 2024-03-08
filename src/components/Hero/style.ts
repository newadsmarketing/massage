import styled from "styled-components";
import BannerHero from "../../assets/images/BannerHero.jpg";

export const ContainerHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  background: url(${BannerHero}) no-repeat center;
  background-size: cover;

  .title {
    color: #fff;
    text-align: center;
    font-family: "Fraunces";
    font-size: 56px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding-bottom: 30px;
    width: 90%;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
    .subtitle {
      color: #fff;
      text-align: center;
      font-family: "Avenir";
      font-size: 18px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding-bottom: 30px;
      width: 90%;
  
      @media (max-width: 768px) {
        font-size: 16px;
      }
  }

  /* .icon-down {
    padding-top: 70px;
  } */
`;

export const ContentHero = styled.img``;
