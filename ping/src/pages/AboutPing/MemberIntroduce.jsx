import React from "react";
import { MemberWrapper, MemberCard, Title, MemberImage, MemberInfo, Name, MemberContainer, MemberRow } from "./MemberIntroduce.styles";

import image1 from '/src/asset/김시현.png';
import image2 from '/src/asset/김송은.png';
import image3 from '/src/asset/권동희.png';
import image4 from '/src/asset/심채현.png';
import image5 from '/src/asset/장유정.png';
const members = [
    {
        name: "김시현",
        role: "개발 - 백엔드, 팀장",
        school: "건국대학교",
        description: "description",
        email: "seanlancekim0@gmail.com",
        git: "https://github.com/seanlancekim0",
        image: image1,
    }, 
    {
        name: "김송은",
        role: "개발 - 백엔드",
        school: "건국대학교",
        description: "description",
        email: "seanlancekim0@gmail.com",
        git: "",
        image: image2,
    }, 
    {
        name: "권동희",
        role: "개발 - 프론트",
        school: "건국대학교",
        description: "description",
        email: "seanlancekim0@gmail.com",
        git: "",
        image: image3,
    }, 
    {
        name: "심채현",
        role: "개발 - 백엔드",
        school: "건국대학교",
        description: "description",
        email: "seanlancekim0@gmail.com",
        git: "",
        image: image4,
    }, 
    {
        name: "장유정",
        role: "개발 - 프론트, 디자인",
        school: "건국대학교",
        description: "description",
        email: "seanlancekim0@gmail.com",
        git: "",
        image: image5,
    },
];

const MemberIntroduce = () => {
    return (
        <MemberWrapper>
            <Title>
                <div className="title">팀원 소개</div>
            </Title>
            <MemberContainer>
                <MemberRow>
                    {members.slice(0, 3).map((member, index) => (
                        <MemberCard key={index}>
                            <MemberImage src={member.image} alt={`${member.name}의 사진`} />
                            <Name>{member.name}</Name>
                            <MemberInfo>
                                <h3>{member.role}</h3>
                                <p>{member.school}</p>
                                <p>{member.description}</p>
                                <div>
                                    <a href={`mailto:${member.email}`}>✉️</a>
                                    <a href={member.git} target="_blank" rel="noopener noreferrer">💼</a>
                                </div>
                            </MemberInfo>
                        </MemberCard>
                    ))}
                </MemberRow>
                <MemberRow>
                    {members.slice(3).map((member, index) => (
                        <MemberCard key={index + 3}>
                            <MemberImage src={member.image} alt={`${member.name}의 사진`} />
                            <Name>{member.name}</Name>
                            <MemberInfo>
                                <h3>{member.role}</h3>
                                <p>{member.school}</p>
                                <p>{member.description}</p>
                                <div>
                                    <a href={`mailto:${member.email}`}>✉️</a>
                                    <a href={member.git} target="_blank" rel="noopener noreferrer">💼</a>
                                </div>
                            </MemberInfo>
                        </MemberCard>
                    ))}
                </MemberRow>
            </MemberContainer>
        </MemberWrapper>
    );
};

export default MemberIntroduce;
