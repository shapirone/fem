import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.70711"
        y1="1.29289"
        x2="26.7487"
        y2="25.3345"
        stroke="#001514"
        stroke-width="2"
      />
      <line
        x1="1.29289"
        y1="25.2929"
        x2="25.3345"
        y2="1.25123"
        stroke="#001514"
        stroke-width="2"
      />
    </svg>
  </CloseIconWrapper>
);
