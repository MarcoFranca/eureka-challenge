import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";

export const MainStyle = styled.main`
  height: calc(100vh - 5.25rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.scrollbarColor};
  
  .background{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  @media screen and (min-width: 1024px){
    justify-content: space-evenly;
    height: calc(100vh - 5.25rem);
    position: relative;
    gap: 1.375rem;
    padding: 0 5%;
    box-sizing: border-box;
  }
`