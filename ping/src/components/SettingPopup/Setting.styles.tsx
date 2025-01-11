import styled from "styled-components";

// Menu 컴포넌트의 Props 타입 정의
interface MenuProps {
  selected: boolean;
}

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const PopupContent = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const MenuWrapper = styled.div`
  width: 330px;
  padding: 5px;
  height: 100%;
  background-color: #f1f1f1;
  border-radius: 12px 0 0 12px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0 20px 20px 20px;
  > section {
    width: 100%;
    display: flex;
    padding: 20px;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 15px;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 40px 20px 20px 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const User = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  gap: 15px;
  box-sizing: border-box;

  > .user-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }

  > .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;

    p {
      font-size: 16px;
      color: #333;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    p.email {
      opacity: 0.3;
    }
  }
`;

export const Menu = styled.div<MenuProps>`
  cursor: pointer;
  width: 320px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${(props) => (props.selected ? "#EAFF0D" : "transparent")};
  transition: background-color 0.3s;

  > img {
    width: 24px;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;
