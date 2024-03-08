import styled from "styled-components";
import ImageCherry from "../../assets/images/ImageCherry.svg";
import ImageOrange from "../../assets/images/ImageOrange.svg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row: 2;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;

    @media (max-width: 900px) {
      grid-row: 1;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row: 1;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  gap: 30px;
  padding-left: 25px;
  padding-right: 25px;

  @media (max-width: 1300px) {
    width: 75%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export const Title = styled.span`
  color: #24303e;
  font-family: "Fraunces";
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.286px;
  max-width: 700px;
  width: 90%;

  @media (max-width: 1100px) {
    font-size: 34px;
  }

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
  }
`;

export const SubTitle = styled.span`
  color: #808397;
  font-family: "Barlow";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 1.5px;
  max-width: 700px;
  width: 90%;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ButtonLearnMore = styled.span`
  color: #24303e;
  font-family: "Fraunces";
  font-size: 15px;
  font-style: normal;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: start;
  width: 100%;

  @media (max-width: 900px) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentImageCherry = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  gap: 30px;
  background: url(${ImageCherry}) no-repeat center;
  background-size: cover;

  .title {
    color: #24554a;
    text-align: center;
    font-family: "Fraunces";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.2px;
    max-width: 380px;
    width: 90%;

    @media (max-width: 900px) {
      font-size: 28px;
    }
  }

  .subtitle {
    color: #3e7467;
    text-align: center;
    font-family: "Barlow";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -0.114px;
    max-width: 400px;
    width: 90%;
    padding-bottom: 12%;

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;

export const ContentImageOrange = styled.div`
  background: url(${ImageOrange}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  .title {
    color: #052c3b;
    text-align: center;
    font-family: "Fraunces";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.2px;
    max-width: 380px;
    width: 90%;

    @media (max-width: 900px) {
      font-size: 28px;
    }
  }

  .subtitle {
    color: #052c3b;
    text-align: center;
    font-family: "Barlow";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -0.114px;
    max-width: 400px;
    width: 90%;
    padding-bottom: 12%;

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;
