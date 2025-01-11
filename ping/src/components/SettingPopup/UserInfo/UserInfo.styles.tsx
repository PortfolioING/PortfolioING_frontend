import styled from "styled-components";

export const Img = styled.div`
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Input = styled.div`
  display: flex;
  width: 400px;
  font-size: 16px;
  position: relative;
  margin: 20px 0;
  > label {
    position: absolute;
    left: 10px;
    top: -25px;
  }
  > input {
    border-radius: 20px;
    padding: 20px;
    height: 40px;
    width: 100%;
    border: 1.5px solid black;
  }
`;
