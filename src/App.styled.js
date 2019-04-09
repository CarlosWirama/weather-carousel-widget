import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, "Trebuchet MS", sans-serif;
  border-radius: 16px;
  background-color: #222;
  width: 250px;
  min-height: 250px;
  overflow: hidden;
  margin: auto;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  && svg {
    color: white;
  }
`;

export const Dots = styled.div`
  &&.slick-dots {
    li button:before {
      font-size: 20px;
      color: lightgray;
    }
    li.slick-active button:before {
      color: white;
    }
  }
`;

export const TopNavbar = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 7px;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 40px;
  & svg {
    margin: auto;
  }
`;
