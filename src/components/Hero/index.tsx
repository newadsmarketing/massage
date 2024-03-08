import * as S from "./style.ts";
import ChevronDown from "../../assets/icons/ChevronDown.png";

function Hero() {
  const handleIconClick = () => {
    // Replace with your actual phone number
    const phoneNumber = "01087660653";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <S.ContainerHero>
      <span className="title">진 시 황 마사지 </span>
      <span className="subtitle">영업시간 / 오후 12시 ~ 익일오전 4시 / 연중무휴 </span>
      <img
        src={ChevronDown}
        className="icon-down"
        alt="ChevronDown"
        onClick={handleIconClick}
        style={{
          width: "10rem", // Set the desired width (e.g., 2rem)
          height: "auto", // Maintain aspect ratio
          cursor: "pointer", // Show pointer cursor on hover
        }}
      />
    </S.ContainerHero>
  );
}

export default Hero;
