import React from "react";
import { Svg } from "@callisto-enterprise/soy-uikit2";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg  width="16" height="13" viewBox="0 0 16 13" {...props}>
        <path d="M6.80053 8.48813L6.55241 11.9781C6.90741 11.9781 7.06116 11.8256 7.24553 11.6425L8.90991 10.0519L12.3587 12.5775C12.9912 12.93 13.4368 12.7444 13.6074 11.9956L15.8712 1.38813L15.8718 1.38751C16.0724 0.452509 15.5337 0.0868843 14.9174 0.316259L1.61116 5.41063C0.703031 5.76313 0.716781 6.26938 1.45678 6.49876L4.85866 7.55688L12.7605 2.61251C13.1324 2.36626 13.4705 2.50251 13.1924 2.74876L6.80053 8.48813Z" fill="#CAF0F8"/>
  </Svg>
  );
};

export default Icon;
