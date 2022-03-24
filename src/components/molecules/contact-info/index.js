import { useTheme } from "@emotion/react";
import { Styles } from "./styles";
import React from "react";

function ContactInfo({ icon: ContactIcon, href, children }) {
  const theme = useTheme();
  return (
    <Styles theme={theme}>
      <a href={href}>
        {ContactIcon && <ContactIcon fontSize={20} />}
        <span>{children}</span>
      </a>
    </Styles>
  );
}

export default ContactInfo;
