import React from "react";

const Oh = ({ fill = "#0075FF", className }) => {
  return (
    <svg
      className={className}
      width="141"
      height="87"
      viewBox="0 0 141 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_737_71)">
        <rect x="4" width="133" height="59" rx="29.5" fill="white" />
        <path
          d="M94.1368 37.3929L124.228 52.914L97.8674 76.1113L94.1368 37.3929Z"
          fill="white"
        />
        <path
          d="M59.3906 29.6875C59.3906 37.0625 54.7969 41.3125 48.8281 41.3125C42.7969 41.3125 38.2344 37.0312 38.2344 29.6875C38.2344 22.3125 42.7969 18.0625 48.8281 18.0625C54.7969 18.0625 59.3906 22.3125 59.3906 29.6875ZM54.6094 29.6875C54.6094 24.8438 52.3281 22.2188 48.8281 22.2188C45.3281 22.2188 43.0156 24.8438 43.0156 29.6875C43.0156 34.5312 45.3281 37.1562 48.8281 37.1562C52.3281 37.1562 54.6094 34.5312 54.6094 29.6875ZM67.2969 31.1875V41H62.6719V18.375H67.1719V27H67.3594C68.1406 25.0312 69.8594 23.8125 72.4219 23.8125C75.9531 23.8125 78.2969 26.1875 78.2969 30.1875V41H73.6719V31C73.6719 28.9062 72.5469 27.6562 70.6094 27.6562C68.6719 27.6562 67.2969 28.9375 67.2969 31.1875ZM92.3906 29.8438V33.5312H82.0781V29.8438H92.3906ZM101.734 18.375L101.328 34.2188H97.3281L96.9219 18.375H101.734ZM99.3594 41.2812C97.8906 41.2812 96.7031 40.0938 96.7344 38.6562C96.7031 37.2188 97.8906 36.0625 99.3594 36.0625C100.734 36.0625 101.953 37.2188 101.953 38.6562C101.953 40.0938 100.734 41.2812 99.3594 41.2812Z"
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_737_71"
          x="0"
          y="0"
          width="141"
          height="84.1113"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_737_71"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_737_71"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Oh;
