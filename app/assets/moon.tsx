import React from "react";

const Moon = () => {
  return (
    <>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="moon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#66757F"
          d="M36 18c0 9.94-8.06 18-18 18c-9.941 0-18-8.06-18-18C0 8.059 8.059 0 18 0c9.94 0 18 8.059 18 18"
        ></path>

        <g fill="#5B6876">
          <circle cx="9.5" cy="7.5" r="3.5"></circle>

          <circle cx="24.5" cy="28.5" r="3.5"></circle>

          <circle cx="22" cy="5" r="2"></circle>

          <circle cx="3" cy="18" r="1"></circle>

          <circle cx="30" cy="9" r="1"></circle>

          <circle cx="16" cy="31" r="1"></circle>

          <circle cx="32" cy="19" r="2"></circle>

          <circle cx="6" cy="26" r="2"></circle>
        </g>

        <path
          d="M18 24.904c-7 0-9-2.618-9-1.381C9 24.762 13 28 18 28s9-3.238 9-4.477c0-1.237-2 1.381-9 1.381M27 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-12 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
          fill="#292F33"
        ></path>
      </svg>
    </>
  );
};

export default Moon;
