import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background: #90d4c6;
  width: 100%;
  max-height: 350px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;

  .logo {
    margin-top: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    list-style-type: none;
    text-align: center;
    padding-right: 30px;
    margin-bottom: 60px;
  }

  ul li {
    color: #458d7e;
    font-family: "Barlow";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px; /* 138.889% */
    letter-spacing: -0.129px;
  }
`;
