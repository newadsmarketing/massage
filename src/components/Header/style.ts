import styled from "styled-components";

interface IHeader {
  showItems: boolean;
}

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const ContentHeader = styled.div<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 90px;
  position: absolute;
  top: 20px;

  nav {
    @media (max-width: 720px) {
      width: 100%;
      position: relative;
      padding-top: 25px;
    }
  }

  .indicate {
    display: none;

    @media (max-width: 720px) {
      display: block;
      width: 0;
      height: 0;
      border-bottom: 24px solid #fffcf8;
      border-top: 24px solid transparent;
      border-right: 24px solid #fffcf8;
      border-left: 24px solid transparent;
      position: absolute;
      right: 0;
      top: 15px;
    }
  }

  menu {
    list-style-type: none;
    display: flex;
    gap: 45px;

    @media (max-width: 720px) {
      display: ${({ showItems }) => (showItems ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fffcf8;
      gap: 32px;
      padding: 20px;
    }
  }
  menu li a {
    color: #fff;
    font-family: "Barlow";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.129px;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 720px) {
      color: #808397;
      font-size: 20px;
    }
  }

  .icon-burger {
    cursor: pointer;

    @media screen and (min-width: 721px) {
      display: none;
    }
  }
`;
