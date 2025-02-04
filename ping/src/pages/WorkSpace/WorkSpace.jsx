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

export default function WorkSpace() {
    const [searchMyPortfolio, setSearchMyPortfolio] = useState("");
    const [searchTemplates, setSearchTemplates] = useState("");

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
                            <Input 
                                type="text" 
                                placeholder="검색"
                                value={searchMyPortfolio}
                                onChange={(e) => setSearchMyPortfolio(e.target.value)}
                            />
                        </div>
                        <p className="empty-text">제작된 포트폴리오가 없습니다.</p>
                    </Section>

                    <hr className="hr"/>

                    <Section>
                        <div className="section-header">
                            <h2>포트폴리오 템플릿</h2>
                            <Input 
                                type="text" 
                                placeholder="검색"
                                value={searchTemplates}
                                onChange={(e) => setSearchTemplates(e.target.value)}
                            />
                        </div>

                        <TemplateGrid>
                            {[1, 2, 3].map((_, index) => (
                                <TemplateItem key={index}>
                                    <Thumbnail />
                                        <div className="info">
                                            <h3>템플릿 제목</h3>
                                            <p>템플릿 설명</p>
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