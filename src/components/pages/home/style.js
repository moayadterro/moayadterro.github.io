import styled from "@emotion/styled";

export const Styles = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 32px 0px;

  .heading-name {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .short-desc {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 24px;
  }
  .profile-pic__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
  }

  .profile-picture {
    width: 16vw;
    height: 16vw;
    min-width: 164px;
    min-height: 164px;
    margin-bottom: 8px;
  }
  h1 {
    font-weight: 600;
    margin-bottom: 0px;
  }
  .contact-info-row {
    display: flex;
    align-items: flex-end;
    svg {
      margin-inline-end: 8px;
    }
  }
  .type-write {
    height: 20px;
  }
`;
