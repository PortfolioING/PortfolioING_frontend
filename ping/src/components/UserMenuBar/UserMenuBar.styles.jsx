import styled from "styled-components";

export const MenuItem = styled.button`
  font-weight: 600;
  font-size: 18px;
  background-color: black;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#EAFF0D" : "white")};

  &:hover {
    color: #eaff0d;
  }
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
  top: 28%;
  right: 8%;
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
        font-weight: bold;
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
