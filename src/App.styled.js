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
`;

export const Dots = styled.div`
  &&.slick-dots {
    li button:before {
      color: lightgray;
    }
    li.slick-active button:before {
      color: white;
    }
  }
`;
