import React from "react";

export const ProductSkeleton = () => {
  return (
    <svg
      role="img"
      aria-labelledby="loading-aria"
      viewBox="0 0 1410 420"
      preserveAspectRatio="none"
      className="skeleton-item"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clipPath)"
        style={{ fill: 'url("#fill")' }}
      ></rect>
      <defs>
        <clipPath id="clipPath">
          <rect x="0" y="10" rx="16" ry="16" width="220" height="400" />
          <rect x="320" y="178" rx="5" ry="5" width="210" height="17" />
          <rect x="320" y="219" rx="5" ry="5" width="100" height="32" />
          <rect x="1245" y="262" rx="25" ry="25" width="160" height="50" />
          <rect x="1285" y="210" rx="5" ry="5" width="80" height="30" />
          <rect x="320" y="10" rx="5" ry="5" width="192" height="26" />
          <rect x="320" y="60" rx="5" ry="5" width="1100" height="80" />
          <rect x="353" y="219" rx="5" ry="5" width="100" height="32" />
          <rect x="320" y="273" rx="5" ry="5" width="128" height="17" />
          <rect x="320" y="315" rx="5" ry="5" width="100" height="32" />
          <rect x="355" y="315" rx="5" ry="5" width="100" height="32" />
          <rect x="466" y="315" rx="5" ry="5" width="100" height="32" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProductSkeleton;
