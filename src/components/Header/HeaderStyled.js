import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";

export const HeaderStyled = styled.header`
  height: 5.25rem;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  box-shadow: 0 2px 3px ${colors.colorGray};
  position: relative;
  
  @media screen and (min-width: 768px){
    padding: 1.5rem 4.5rem;
  }
`