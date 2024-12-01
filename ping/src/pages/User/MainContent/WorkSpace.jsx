import React, { useState, useEffect } from "react";
import instance from "../../../apis/instance/index.js";
import Portfolio from "../../../components/Portfolio/Portfolio";
import Search from "../../../asset/search.svg";
import { Wrapper, Title } from "../MainContent.styles";
import styled from "styled-components";

// API 호출 함수
const fetchPortfolios = async () => {
  const userId = sessionStorage.getItem("userId");

  if (!userId) {
    console.error("User ID is missing");
    return;
  }

  try {
    const response = await instance.get("/api/portfolio", {
      params: { user_id: userId }, // 서버가 요구하는 user_id를 사용
    });
    console.log("Fetched Portfolios:", response.data);

    // 필요한 데이터 추출
    const portfolios = response.data.portfolios.map((portfolio) => ({
      title: portfolio.title,
      roles: portfolio.surveyDto.projects[0].roles || [], // roles 배열을 가져옴
      templateId: portfolio.templateId,
      updatedAt: portfolio.updatedAt,
      img: "string", // 임시 문자열 할당
    }));

    return portfolios;
  } catch (error) {
    console.error("포트폴리오를 불러오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};

// 스타일 정의
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
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPortfolios = async () => {
      const userId = sessionStorage.getItem("userId"); // sessionStorage에서 userId 가져오기
      console.log("Fetched userId from sessionStorage:", userId);

      try {
        setLoading(true);
        const data = await fetchPortfolios(userId);
        setPortfolios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolios();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Wrapper>
      <Title>
        <div className="title">
          <p>나의 포트폴리오</p>
        </div>
        <div className="search-wrapper">
          <input type="text" placeholder="포트폴리오 검색" />
          <img src={Search} alt="search icon" />
        </div>
      </Title>

      {portfolios.length > 0 ? (
        portfolios.map((portfolio, index) => {
          console.log("Template ID:", portfolio.templateId); // templateId 출력
          return (
            <PortfolioWrapper key={index}>
              <Portfolio
                title={portfolio.title}
                img={portfolio.img}
                templateId={portfolio.templateId}
                roles={portfolio.roles}
                last={portfolio.updatedAt}
              />
            </PortfolioWrapper>
          );
        })
      ) : (
        <PortfolioWrapper>
          <div className="no-portfolio">포트폴리오가 없습니다.</div>
        </PortfolioWrapper>
      )}
    </Wrapper>
  );
};

export default WorkSpace;
