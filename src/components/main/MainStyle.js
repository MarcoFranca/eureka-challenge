import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";

export const MainStyle = styled.main`
  height: 100vh;
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
    position: relative;
    gap: 22px;
    padding: 0 5%;
    box-sizing: border-box;
  }
`