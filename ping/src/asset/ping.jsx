import React from "react";
//pr 확인용
const Ping = ({
  fillPath1 = "#E4FF0D",

  fillPath2 = "black",
  width = 74, // 기본 너비
  height = 111, // 기본 높이
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8677 63.45H10.2428V22.8889C7.17155 23.1069 12.6463 22.6708 10.2428 22.8889L10.2429 19.1544V14.475L10.2429 10.5858L10.2428 2.45001C23.2882 3.44188 18.9918 2.9459 30.876 2.9459C59.4516 2.9459 73.28 13.948 73.28 30.5213C73.28 50.5838 55.1198 63.45 31.0843 63.45H19.8677ZM20.9535 21.7915L19.8677 45.4592H26.8113C39.4967 45.4592 46.7074 39.7893 46.7074 31.9388C46.7074 24.8515 40.4314 20.381 28.4136 20.381C26.1436 20.381 23.8719 20.7996 20.9535 21.7915Z"
        fill={fillPath1}
      />
      <path
        d="M28.34 35.88V83.33C28.34 86.71 28.86 88.27 30.94 88.53C32.11 88.66 36.11 87.34 37.28 86.95L38.78 87.45C40.08 94.34 34.19 111.02 17.68 109.98C7.15 109.33 2.99 102.05 2.99 88.01V35.88H28.34ZM0 14.56C0 5.98 6.63 0 15.6 0C24.57 0 31.2 5.98 31.2 14.56C31.2 23.14 24.57 29.12 15.6 29.12C6.63 29.12 0 23.14 0 14.56Z"
        fill={fillPath1}
      />
      <circle cx="8.28003" cy="8.45001" r="4" fill="#D5D5D5" />
      <circle cx="7.78003" cy="7.95001" r="3.5" fill="white" />
      <path
        d="M9.28003 31.45C9.28003 29.7932 10.6232 28.45 12.28 28.45H15.78H17.28C20.0415 28.45 22.28 30.6886 22.28 33.45V79.45C22.28 82.2114 20.0415 84.45 17.28 84.45H14.28C11.5186 84.45 9.28003 82.2114 9.28003 79.45V31.45Z"
        fill={fillPath2}
      />
      <path
        d="M11.28 34.95C11.28 33.017 12.847 31.45 14.78 31.45H16.78C18.713 31.45 20.28 33.017 20.28 34.95V74.95C20.28 77.4353 18.2653 79.45 15.78 79.45C13.2947 79.45 11.28 77.4353 11.28 74.95V34.95Z"
        fill={fillPath1}
      />
    </svg>
  );
};

export default Ping;