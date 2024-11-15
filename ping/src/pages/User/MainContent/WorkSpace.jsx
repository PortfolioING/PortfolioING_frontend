import Portfolio from "../../../components/Portfolio/Portfolio";
import Search from "../../../asset/search.svg";
import { Wrapper, Title } from "../MainContent.styles";
import styled from "styled-components";
const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > .no-portfolio {
    display: flex;
    align-items: center;
    color: #898989;
    font-size: 15px;
    font-weight: 600;
    margin-top: 100px;
  }
`;
const WorkSpace = () => {
  const portfolios = [
    {
      title: "동아리용 포폴",
      img: "http://via.placeholder.com/240x240",
      categories:
        "프론트엔드, 백엔드, 디자인, UI/UX, 안드로이드, IOS, 기획, AI, 보안 ",
      last: "2024/11/05",
    },
  ];
  return (
    <Wrapper>
      <Title>
        <div className="title">
          <p>나의 포트폴리오</p>
        </div>
        <div className="search-wrapper">
          <input type="text" placeholder="포토폴리오 검색" />
          <img src={Search} alt="search icon" />
        </div>
      </Title>

      {portfolios.map((portfolio) => (
        <PortfolioWrapper>
          <Portfolio
            title={portfolio.title}
            img={portfolio.img}
            categories={portfolio.categories}
            last={portfolio.last}
          />
        </PortfolioWrapper>
      ))}
    </Wrapper>
  );
};
export default WorkSpace;
