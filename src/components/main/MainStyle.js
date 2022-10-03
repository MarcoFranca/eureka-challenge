import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";

export const MainStyle = styled.main`
  height: auto;
  min-height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${colors.scrollbarColor};
  
  .background{
    position: absolute;
    object-fit: cover;
    justify-self: center;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  @media screen and (min-width: 1024px){
    min-height: calc(100vh - 5.25rem);
    flex-direction: row;
    position: relative;
    gap: 1.375rem;
    box-sizing: border-box;
  }
`