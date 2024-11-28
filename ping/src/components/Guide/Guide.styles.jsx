import styled from "styled-components";
export const GuideWrapper = styled.div`
  position: fixed;
  bottom: 15%; /* 말풍선과 핑 위치 조정 */
  right: 5%; /* 화면 오른쪽에서 조정 */

  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 오른쪽 정렬 */
  gap: 10px; /* 말풍선과 핑 간격 */

  > .ping {
    position: relative;
    right: 0;
    bottom: 0;
  }
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: 250px;
  height: 90px;
`;

export const BubbleBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 1.2;
  background: linear-gradient(90deg, #cff2eb, #bee5ff, #f0c7ff);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  .text {
    color: white;
    font-size: 14px;
    font-weight: 550;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
  }

  .tail-dot {
    position: absolute;
    bottom: -3px;
    right: 10px; /* 꼬리의 위치 */
    background-color: #dfd0ff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const BubbleTail = styled.div`
  position: absolute;
  bottom: -15px;
  right: 0px; /* 말풍선 꼬리의 위치 조정 */
  background-color: #dfd0ff; /* 말풍선 꼬리 색상 */
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;
