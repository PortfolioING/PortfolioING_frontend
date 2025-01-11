import React from "react";
import Button from "../../../Button/Button";
import styled from "styled-components";

const SubscriptionInfoWrapper = () => {
  const subscriptions = [
    { title: "Free", price: 0, using: false },
    { title: "Starter", price: 7900, using: false },
    { title: "Pro", price: 13900, using: true },
  ];

  return (
    <Wrapper>
      <Title>현재 Free(무료 요금제)를 이용하고 있습니다.</Title>
      <Subscriptions>
        {subscriptions.map((sub) => (
          <SubscriptionInfo
            key={sub.title}
            title={sub.title}
            price={sub.price}
            using={sub.using}
          />
        ))}
      </Subscriptions>
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
    alert(using ? "현재 이용 중인 요금제입니다." : "현재 이용할 수 없습니다.");
  };

  return (
    <StyledSubscriptionInfo using={using}>
      <div className="subscription-title">{title}</div>
      <div className="subscription-details">
        <p className="subscription-price">{price}원</p>
        <p className="subscription-period">/ 월</p>
      </div>
      {!using && (
        <p className="subscription-message">
          현재 구독 제품에 포함된 기능입니다.
        </p>
      )}
      {using && (
        <Button
          onClick={handleClick}
          disabled={using}
          size="s"
          width="95px"
          height="43px"
          style={{ opacity: "0.3" }}
        >
          이용중
        </Button>
      )}
    </StyledSubscriptionInfo>
  );
};

export default SubscriptionInfoWrapper;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Subscriptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledSubscriptionInfo = styled.div<{ using: boolean }>`
  background-color: ${(props) => (props.using ? "#E4FF0DCC" : "#ECECEC")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 230px;
  padding: 0 10px;
  border-radius: 20px;
  box-sizing: border-box;

  .subscription-title {
    font-size: 36px;
    font-weight: 600;
  }

  .subscription-details {
    font-size: 15px;
    font-weight: 200;
    display: flex;
    align-items: center;

    .subscription-price {
      font-size: 25px;
      font-weight: 300;
    }

    .subscription-period {
      font-size: 15px;
      font-weight: 200;
    }
  }

  .subscription-message {
    font-size: 14px;
    color: #545454;
    text-align: center;
    margin-bottom: 10px;
  }
`;
