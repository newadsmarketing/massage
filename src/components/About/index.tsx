import * as S from "./style.ts";
import ImageEgg from "../../assets/images/ImageEgg.svg";
import ImageCup from "../../assets/images/ImageCup.svg";

function About() {
  return (
    <>
      <S.Container id="about">
        <S.ContentItem>
          <S.ContentText>
            <S.Title>Transform your brand</S.Title>
            <S.SubTitle>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </S.SubTitle>
            <S.ButtonLearnMore>Learn More</S.ButtonLearnMore>
          </S.ContentText>
        </S.ContentItem>
        <img src={ImageEgg} alt="" />
      </S.Container>

      <S.Container>
        <img src={ImageCup} alt="" />
        <S.ContentItem>
          <S.ContentText>
            <S.Title>Stand out to the right audience</S.Title>
            <S.SubTitle>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </S.SubTitle>
            <S.ButtonLearnMore>Learn More</S.ButtonLearnMore>
          </S.ContentText>
        </S.ContentItem>
      </S.Container>

      <S.Container>
        <S.ContentImageCherry>
          <span className="title">Graphic Design</span>
          <span className="subtitle">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </span>
        </S.ContentImageCherry>
        <S.ContentImageOrange>
          <span className="title">Photography</span>
          <span className="subtitle">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </span>
        </S.ContentImageOrange>
      </S.Container>
    </>
  );
}

export default About;
