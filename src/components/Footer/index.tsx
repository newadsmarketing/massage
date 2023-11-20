import * as S from "./style";
import GroupSocialMedia from "../../assets/images/GroupSocialMedia.svg";
import Logo from "../../assets/images/sunnyside.svg";

function Footer() {
  return (
    <S.ContainerFooter>
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <img src={GroupSocialMedia} alt="Group Social Media" />
    </S.ContainerFooter>
  );
}

export default Footer;
