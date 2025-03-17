import styled from "styled-components";

export const SideStyleBarWrapper = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 300px;
  height: 600px;
  border-radius: 20px;
  background-color: #2a2a2a;
  padding: 20px;
  > * {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  padding-bottom: 10px;
  border-bottom: 1px solid #3c3c3c;
`;

export const StyleMain = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > * {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const StyleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

export const FontStyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

/** 🎯 드롭다운 스타일 */
export const DropDownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DropDownHeader = styled.div`
  background-color: #2a2a2a;
  border: 2px solid #3c3c3c;
  color: #ffffff;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #3c3c3c;
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #2a2a2a;
  border: 2px solid #3c3c3c;
  border-radius: 5px;
  color: #ffffff;
  list-style: none;
  padding: 5px 0;
  margin-top: 5px;
  z-index: 10;
`;

export const DropDownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #3c3c3c;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  > * {
    height: 38px;
  }
`;
export const TextToolBar = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: center;
  gap: 18px;
  background-color: #3c3c3c;
`;
export const DropDownBtn = styled.img``;
export const TextImg = styled.img``;
