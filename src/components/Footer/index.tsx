import * as S from "./style";
import GroupSocialMedia from "../../assets/images/GroupSocialMedia.svg";
import Logo from "../../assets/images/sunnyside.png";

function Footer() {
  return (
    <S.ContainerFooter>
      <img className="logo" src={Logo} alt="Logo" />
      <ul>
        <li>광고문의</li>
        <li>텔레그램</li>
        <li>@anyjang</li>
      </ul>
      <img src={GroupSocialMedia} alt="Group Social Media" />
    </S.ContainerFooter>
  );
}

export default Footer;
