import React from "react";

const SimpleBtn = ({ fill = "", className }) => {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25Z"
        stroke={fill}
      />
      <path
        d="M35.9986 16.0526C36.0276 15.501 35.6041 15.0304 35.0526 15.0014L26.065 14.5284C25.5135 14.4993 25.0428 14.9229 25.0138 15.4744C24.9848 16.0259 25.4084 16.4966 25.9599 16.5256L33.9488 16.9461L33.5284 24.935C33.4993 25.4865 33.9229 25.9572 34.4744 25.9862C35.0259 26.0152 35.4966 25.5916 35.5256 25.0401L35.9986 16.0526ZM15.669 34.7433L35.669 16.7433L34.331 15.2567L14.331 33.2567L15.669 34.7433Z"
        fill={fill}
      />
    </svg>
  );
};

export default SimpleBtn;
