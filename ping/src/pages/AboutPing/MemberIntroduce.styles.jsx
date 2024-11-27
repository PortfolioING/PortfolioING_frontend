import styled from "styled-components";

const MemberWrapper = styled.div`
  margin-left: 30%;
  margin-right: 10%;
  padding: 20px;
  background-color: #2a2a2a;
  color: white;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  > .title {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: 600;
  }
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberRow = styled.div`
  display: flex; 
  justify-content: space-around;
  width: 100%; 
`;

const MemberCard = styled.div`
  text-align: center;
  background-color: #3D3D3D;
  border-radius: 15px;
  width: 250px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 auto 10px auto;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  > * {
  padding-left: 20%;
  margin-bottom: 10px;
    display: flex;
    line-height: 1.3;
    height: 20px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

export { MemberWrapper, MemberCard, Title, MemberImage, MemberInfo, Name, MemberContainer, MemberRow };
