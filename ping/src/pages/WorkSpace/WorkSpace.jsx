import React, { useState } from "react";
import { 
    WorkSpaceContainer, 
    WorkSpaceWrapper, 
    Title, 
    Wrapper, 
    UserSection, 
    Section, 
    Input, 
    TemplateGrid, 
    TemplateItem, 
    Thumbnail, 
    Pagination 
} from "./WorkSpace.styles";
import UserMenuBar from "../../components/UserMenuBar/UserMenuBar";
import search from "../../asset/icons/icon_search.svg";
import figma from "../../asset/icons/figma_icon.svg";
import notion from "../../asset/icons/notion_icon.svg";



export default function WorkSpace() {
    const [searchMyPortfolio, setSearchMyPortfolio] = useState("");
    const [searchTemplates, setSearchTemplates] = useState("");
    const [hasPortfolio, setHasPortfolio] = useState(true);

    const templates = [
        { title: '포트폴리오 1', date: '2025/02/04', hashtags: ['#기획', '#디자인'], techs: ['figma', 'notion'] },
        { title: '포트폴리오 2', date: '2025/02/03', hashtags: ['#개발', '#프로그래밍'], techs: ['figma', 'notion'] },
        { title: '포트폴리오 3', date: '2025/02/02', hashtags: ['#마케팅', '#기획'], techs: ['figma', 'notion'] },
    ];

    return (
        <WorkSpaceContainer>
            <WorkSpaceWrapper>
                <Wrapper>
                    <UserSection>
                        <Title>워크스페이스</Title>
                        <UserMenuBar />
                    </UserSection>

                    <hr className="hr"/>

                    <Section>
                        <div className="section-header">
                            <h2>나의 포트폴리오</h2>
                            <div>
                                <Input 
                                    type="text" 
                                    placeholder="검색"
                                    value={searchTemplates}
                                    onChange={(e) => setSearchTemplates(e.target.value)}
                                />
                                <img 
                                    src={search}
                                    alt="검색"
                                    style={{
                                        position: 'relative',
                                        right: '11%',
                                        transform: 'translateY(25%)',
                                        width: '22px',
                                        height: '22px',
                                        cursor: 'pointer' // 클릭 가능하게 변경
                                    }}
                                />
                            </div>
                        </div>
                        {hasPortfolio ? ( // 포트폴리오가 있을 때
                            <TemplateGrid>
                                {templates.map((template, index) => (
                                    <TemplateItem key={index}>
                                    <Thumbnail />
                                    <div className="portfolio-info">
                                        <h3 className="portfolio-title">{template.title}</h3>
                                        <p className="portfolio-exp">마지막 수정: {template.date}</p>
                                        <div className="portfolio-hash">
                                            {template.hashtags.map((hashtag, idx) => (
                                                <p key={idx} className="hashtag">{hashtag}</p>
                                            ))}
                                        </div>
                                        <div className="portfolio-tech">
                                            {template.techs.map((tech, idx) => (
                                                <p key={idx} className="tech">{tech}</p>
                                            ))}
                                        </div>
                                    </div>
                                    </TemplateItem>
                                ))}
                            </TemplateGrid>
                        ) : (
                            <p className="empty-text">제작된 포트폴리오가 없습니다.</p> // 포트폴리오가 없을 때
                        )}

                        <Pagination>
                            <span>&lt;</span>
                            <span>1 / 2</span>
                            <span>&gt;</span>
                        </Pagination>
                    </Section>

                    <hr className="hr"/>

                    <Section>
                        <div className="section-header">
                            <h2>포트폴리오 템플릿</h2>
                            <div>
                                <Input 
                                    type="text" 
                                    placeholder="검색"
                                    value={searchTemplates}
                                    onChange={(e) => setSearchTemplates(e.target.value)}
                                />
                                <img 
                                    src={search}
                                    alt="검색"
                                    style={{
                                        position: 'relative',
                                        right: '11%',
                                        transform: 'translateY(25%)',
                                        width: '22px',
                                        height: '22px',
                                        cursor: 'pointer' // 클릭 가능하게 변경
                                    }}
                                />
                            </div>
                        </div>

                        <TemplateGrid>
                            {[1, 2, 3].map((_, index) => (
                                <TemplateItem key={index}>
                                    <Thumbnail />
                                        <div className="template-info">
                                            <h3 className="template-title">템플릿 제목</h3>
                                            <p className="template-exp">템플릿 설명</p>
                                        </div>
                                </TemplateItem>
                            ))}
                        </TemplateGrid>

                        <Pagination>
                            <span>&lt;</span>
                            <span>1 / 2</span>
                            <span>&gt;</span>
                        </Pagination>
                    </Section>
                </Wrapper>
            </WorkSpaceWrapper>
        </WorkSpaceContainer>
    );
}