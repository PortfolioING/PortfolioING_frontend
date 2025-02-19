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

export default function WorkSpace() {
    const [searchMyPortfolio, setSearchMyPortfolio] = useState("");
    const [searchTemplates, setSearchTemplates] = useState("");
    const [hasPortfolio, setHasPortfolio] = useState(true);

    const templates = [
        { title: '포트폴리오 1', date: '2025/02/04', hashtags: ['#기획', '#디자인'], techs: ['figma'] },
        { title: '포트폴리오 2', date: '2025/02/03', hashtags: ['#개발', '#프로그래밍'], techs: ['figma'] },
        { title: '포트폴리오 3', date: '2025/02/02', hashtags: ['#마케팅', '#기획'], techs: ['figma'] },
        { title: '포트폴리오 4', date: '2025/02/04', hashtags: ['#기획', '#디자인'], techs: ['figma'] },
        { title: '포트폴리오 5', date: '2025/02/03', hashtags: ['#개발', '#프로그래밍'], techs: ['figma'] },
        { title: '포트폴리오 6', date: '2025/02/02', hashtags: ['#마케팅', '#기획'], techs: ['figma'] }
    ];

    const templates2 = [
        { title: '템플릿제목 1', desc: '템플릿 설명' },
        { title: '템플릿제목 2', desc: '템플릿 설명' },
        { title: '템플릿제목 3', desc: '템플릿 설명' },
        { title: '템플릿제목 4', desc: '템플릿 설명' },
        { title: '템플릿제목 5', desc: '템플릿 설명' }
    ];

    const itemPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);


    // 페이지네이션을 위한 함수
    const paginate = (data, currentPage) => {
        const indexOfLastItem = currentPage * itemPerPage;
        const indexOfFirstItem = indexOfLastItem - itemPerPage;
        return data.slice(indexOfFirstItem, indexOfLastItem);
    };

    const totalPages = Math.ceil(templates.length / itemPerPage);
    const totalPages2 = Math.ceil(templates2.length / itemPerPage);

    const currentItems = paginate(templates, currentPage);
    const currentItems2 = paginate(templates2, currentPage2);

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
                                {currentItems.map((template, index) => (
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
                                                <div key={idx} className="tech">
                                                    <img 
                                                        src={figma}
                                                        alt="피그마"
                                                        style={{
                                                            position: 'relative',
                                                            right: '11%',
                                                            width: '15px',
                                                            height: '15px',
                                                        }}
                                                    />
                                                    {tech}
                                                </div>
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
                            <button 
                                onClick={() => setCurrentPage(currentPage - 1)} 
                                disabled={currentPage === 1}
                            > &lt; </button>
                            <span>{currentPage} / {totalPages}</span>
                            <button 
                                onClick={() => setCurrentPage(currentPage + 1)} 
                                disabled={currentPage === totalPages}
                            > &gt; </button>
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
                            {currentItems2.map((template, index) => (
                                <TemplateItem key={index}>
                                    <Thumbnail />
                                        <div className="template-info">
                                            <h3 className="template-title">{template.title}</h3>
                                            <p className="template-exp">{template.desc}</p>
                                        </div>
                                </TemplateItem>
                            ))}
                        </TemplateGrid>

                        <Pagination>
                            <button 
                                onClick={() => setCurrentPage2(currentPage2 - 1)} 
                                disabled={currentPage2 === 1}
                            > &lt; </button>
                            <span>{currentPage2} / {totalPages2}</span>
                            <button 
                                onClick={() => setCurrentPage2(currentPage2 + 1)} 
                                disabled={currentPage2 === totalPages2}
                            > &gt; </button>
                        </Pagination>
                    </Section>
                </Wrapper>
            </WorkSpaceWrapper>
        </WorkSpaceContainer>
    );
}