import { useTheme } from "@emotion/react";
import { Styles } from "./styles";
import React from "react";

function Section({ header: Header, title, children }) {
  const theme = useTheme();
  return (
    <Styles theme={theme}>
      <Header>{title}</Header>
      <div>{children}</div>
    </Styles>
  );
}

export default Section;
