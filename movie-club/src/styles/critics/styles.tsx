import styled from "styled-components";

export const StyledIntro = styled.div`
  background-color: #111;
  color: #f7f7f7;
  padding: 15px;
  text-align: center;
`;

export const StyledProfiles = styled.div`
  background-color: #111;
  color: #f7f7f7;
  display: flex; flex-direction: column;
  margin: 0 auto;
  max-width: 1024px;

  .about-profile {
    display: flex; flex-direction: column;
    min-height: 300px;

    @media (min-width: 768px) {
      flex-direction: row;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  }

  .about-profile-image {
    background-color: #111;
    width: 100%;

    > div {
      width: 100%;

      > div {
        max-width: none !important;
      }
    }

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const StyledTitle = styled.div`
  box-sizing: border-box;
  display: flex; align-items: center; flex-direction: column; justify-content: center;
  padding: 25px 25px 150px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    padding: 25px;
    width: 50%;
  }

  h2 {
    margin: 10px 0;
  }

  p.description {
    color: #bbb;
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 12px;
    max-width: 90%;
  }

  p.see-more {
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    margin: 0;

    a {
      color: #f7f7f7;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
  }
`;