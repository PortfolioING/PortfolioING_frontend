import Button from "../../../../components/Button/Button";
import styled from "styled-components";
const PriceDivWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 193px;
  border-radius: 20px;
  border: ${(props) => (props.using ? `3px solid #E4FF0DCC` : "")};
  box-sizing: border-box;
  > .title {
    font-size: 36px;
    font-weight: 500;
  }
  > .price-div {
    font-size: 15px;
    font-weight: 200;
    display: flex;
    align-items: center;
    > .price {
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
const PriceDiv = ({ title, price, using }) => {
  const handleClick = () => {
    alert("현재 이용할 수 없습니다");
  };
  return (
    <PriceDivWrapper using={using}>
      <div className="title">{title}</div>
      <div className="price-div">
        <p className="price">{price}원 </p>
        <p>/ 월</p>
      </div>
      <Button
        onClick={handleClick}
        isDisabled={using ? true : false}
        size="sm"
        mainColor="WhiteBlack"
        children={using ? "이용중" : "구독하기"}
      />
    </PriceDivWrapper>
  );
};
export default PriceDiv;
