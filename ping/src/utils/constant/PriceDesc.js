// PriceDesc 상수 분리
export const PRICE_DESCRIPTIONS = [
  {
    key: "FREE",
    descriptions: [
      { isAble: true, desc: "다른 유저들의 포트폴리오 열람 가능" },
      { isAble: false, desc: "템플릿 특성 변경 가능" },
      { isAble: false, desc: "10번의 무료 배포" },
      { isAble: false, desc: "더 많은 템플릿" },
      { isAble: false, desc: "다른 유저들의 포트폴리오 열람 가능" },
    ],
  },
  {
    key: "STARTER",
    descriptions: [
      { isAble: true, desc: "다른 유저들의 포트폴리오 열람 가능" },
      { isAble: true, desc: "템플릿 특성 변경 가능" },
      { isAble: true, desc: "10번의 무료 배포" },
      { isAble: false, desc: "더 많은 템플릿" },
      { isAble: false, desc: "다른 유저들의 포트폴리오 열람 가능" },
    ],
  },
  {
    key: "PRO",
    descriptions: [
      { isAble: true, desc: "다른 유저들의 포트폴리오 열람 가능" },
      { isAble: true, desc: "템플릿 특성 변경 가능" },
      { isAble: true, desc: "10번의 무료 배포" },
      { isAble: true, desc: "더 많은 템플릿" },
      { isAble: true, desc: "다른 유저들의 포트폴리오 열람 가능" },
    ],
  },
];
