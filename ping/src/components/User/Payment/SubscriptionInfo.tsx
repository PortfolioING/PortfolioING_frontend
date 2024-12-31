import React from "react";
import Button from "../../Button/Button";
import styled from "styled-components";

const SubscriptionInfoWrapper = () => {
  return (
    <Wrapper>
      <Title>
        <p className="title">Free(무료 요금제)</p>
        <p>를 이용하고 있습니다.</p>
      </Title>
      <div className="subscriptions">
        <SubscriptionInfo title="Free" price={0} using={true} />
        <SubscriptionInfo title="Starter" price={7900} using={false} />
        <SubscriptionInfo title="Pro" price={13900} using={false} />
      </div>
    </Wrapper>
  );
};

interface SubscriptionInfoProps {
  title: string;
  price: number;
  using: boolean;
}

const SubscriptionInfo: React.FC<SubscriptionInfoProps> = ({
  title,
  price,
  using,
}) => {
  const handleClick = (): void => {
    if (using) alert("현재 이용 중인 요금제입니다.");
    else alert("현재 이용할 수 없습니다");
  };
  return (
    <StyledSubscriptionInfo using={using}>
      <div className="subscription-title">{title}</div>
      <div className="subscription-details">
        <p className="subscription-price">{price}원</p>
        <p className="subscription-period">/ 월</p>
      </div>
      <Button
        onClick={handleClick}
        disabled={using ? true : false}
        size="xs"
        mainColor="WhiteBlackB"
      >
        {using ? "이용중" : "구독하기"}
      </Button>
    </StyledSubscriptionInfo>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #f1f1f1b5;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
  > .subscriptions {
    display: flex;
    justify-content: space-around;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  margin-bottom: 20px;
  > .title {
    font-size: 20px;
    font-weight: 500;
  }
`;
const StyledSubscriptionInfo = styled.div<{ using: boolean }>`
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

  > .subscription-title {
    font-size: 36px;
    font-weight: 530;
  }
  > .subscription-details {
    font-size: 15px;
    font-weight: 200;
    display: flex;
    align-items: center;
    > .subscription-price {
      font-size: 20px;
      font-weight: 300;
    }
    > .subscription-period {
      font-size: 15px;
      font-weight: 200;
    }
  }
`;

export default SubscriptionInfoWrapper;
