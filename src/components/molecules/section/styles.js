import styled from "@emotion/styled";
export const Styles = styled("div")`
  text-align: justify;

  @media (max-width: 900px) {
    max-width: 90%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }

  max-width: 85%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    fontfamily: Ubuntu;
  }
`;
