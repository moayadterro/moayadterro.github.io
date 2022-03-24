import styled from "@emotion/styled";
export const Styles = styled("div")`
  margin-bottom: 12px;
  a {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: ${(props) => props.theme.palette.grey[800]};
    font-weight: 500;
  }

  svg {
    margin-inline-end: 8px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
