import * as S from "./style.ts";
import ImagePrice from "../../assets/images/ImagePrice.jpg";
import ImageCup from "../../assets/images/ImageCup.jpg";


function About() {
  return (
    <>
    
      <S.Container id="about">
      <img src={ImagePrice} alt="" />
        <S.ContentItem>
          <S.ContentText>
            <S.Title>서비스 소개</S.Title>
            <S.SubTitle>
            향남 '진시황 마사지' 가장합리적인 가격으로 최고에 서비스를 약속드립니다.
            고객만족도 & 재방문율 1위 깔끔하고 세련된 인테리어를 갖추고 있으며
            모든 관리사분들이 최고의 친절함으로 편안한 시간을 보장드립니다.
            </S.SubTitle>
            <S.ButtonLearnMore>향남 진시황 마사지</S.ButtonLearnMore>
          </S.ContentText>
        </S.ContentItem>
        
      </S.Container>

      <S.Container>
        <img src={ImageCup} alt="" />
        <S.ContentItem>
          <S.ContentText>
            <S.Title>오시는 길</S.Title>
            <S.SubTitle>
           롯데시네마 보도 1분거리 해당건물 주차장 이용가능
            </S.SubTitle>
            <S.ButtonLearnMore>경기 화성시 향남읍 발안 양감로205 진시황마사지</S.ButtonLearnMore>
          </S.ContentText>
        </S.ContentItem>
      </S.Container>

      
    </>
  );
}

export default About;
