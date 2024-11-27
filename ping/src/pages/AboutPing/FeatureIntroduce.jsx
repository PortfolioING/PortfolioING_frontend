import React from "react";
import { Wrapper, Title, Section, AboutPingWrapper } from "./FeatureIntroduce.styles";

const FeatureIntroduce = () => {
    return (
        <Wrapper>
            <Title>
                <div className="title">기능 소개</div>
            </Title>
            <AboutPingWrapper>
                <Section>
                    <h3>구체적인 콘텐츠 가이드 제공</h3>
                    <p>
                        포트폴리오에 포함해야 할 핵심 내용과 그 구조에 대한 체계적이고
                        명확한 가이드를 제시하여 사용자들이 자신만의 스토리를 효과적으로
                        구성할 수 있습니다.
                    </p>
                </Section>

                <Section>
                    <h3>다양한 레이아웃과 템플릿 옵션</h3>
                    <p>
                        개성과 목적에 맞춘 다양한 레이아웃과 템플릿을 제공하고 그 안에서
                        사용자가 손쉽게 커스터마이징이 가능해 원하는 스타일의 포트폴리오를
                        완성할 수 있습니다.
                    </p>
                </Section>

                <Section>
                    <h3>효율적인 포트폴리오 작성 지원</h3>
                    <p>
                        명확한 가이드라인과 직관적인 레이아웃을 통해 손쉽고 빠르게
                        가독성 높은 포트폴리오를 완성할 수 있습니다.
                    </p>
                </Section>

                <Section>
                    <h3>부담 없는 시작</h3>
                    <p>
                        포트폴리오 작성이 처음인 사용자도 부담 없이 시작할 수 있도록
                        간결하면서도 체계적인 지원을 제공합니다.
                    </p>
                </Section>

                <Section>
                    <h3>포트폴리오 보관 및 관리 기능</h3>
                    <p>
                        작성한 포트폴리오를 안전하게 보관하고 업데이트할 수 있는 기능을 통해
                        장기적인 관리와 발전이 가능한 플랫폼을 제공합니다.
                    </p>
                </Section>

                <Section>
                    <h3>공유가능한 온라인 포트폴리오</h3>
                    <p>
                        웹사이트 배포 기능을 통해 온라인 포트폴리오를 제공하여 개인 브랜드의
                        접근성을 높일 수 있습니다.
                    </p>
                </Section>
            </AboutPingWrapper>
        </Wrapper>
    );
};

export default FeatureIntroduce;
