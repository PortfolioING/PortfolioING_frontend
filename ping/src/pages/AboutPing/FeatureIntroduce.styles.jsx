import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 30%;
  margin-right: 20%;
  padding: 30px;
  background-color: #2a2a2a;
  border-radius: 10px;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 27px;
  font-weight: 600;
`;

const AboutPingWrapper = styled.div`
  background-color: #3D3D3D;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Section = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 15px;
  }
  p {
    font-size: 16px;
    color: #C1C1C1;
    line-height: 1.5;
  }
`;
export { Wrapper, Title, Section, AboutPingWrapper };
