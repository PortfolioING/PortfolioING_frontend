import styled from "styled-components";
import { HEADER } from "../../utils/constant/Bar";
export const Bar = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER}px;
  width: 100%;
  background-color: #000000;
  z-index: 10;
  padding: 0 40px;
  box-sizing: border-box;

  .left_menu,
  .right_menu {
    display: flex;
    gap: 20px;
    align-items: center;
    box-sizing: border-box;

    > img {
      width: 60px;
    }
  }
`;

export const MenuItem = styled.button`
  font-size: 18px;
  background-color: black;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#EAFF0D" : "white")};
`;

export const UserIcon = styled.div`
  background-color: #d9d9d9;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 40px;
  width: 270px;
  z-index: 20;
`;

export const Popup = styled.div`
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 10px;
  padding: 20px;
  position: relative;

  .popup-header {
    display: flex;
    justify-content: space-between;
    > .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .nickname {
        font-size: 16px;

        color: #333;
      }

      .email {
        font-size: 14px;
        color: #888;
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e9ecef;
    margin: 10px 0;
  }
`;

export const PopupItem = styled.div`
  padding: 10px 0;
  font-size: 15px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #f1f3f5;
    border-radius: 8px;
    padding-left: 10px;
  }

  svg {
    font-size: 18px;
  }
`;
