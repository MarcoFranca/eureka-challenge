import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";
import {fontFamily} from "../../assets/global/fontsStyle";

//leaderboards card styling

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${colors.colorWhite};
  width: 300px;
  height: 386px;
  border-radius: 8px;
  padding: 8px;

  @media screen and (min-width: 1024px){
    position: relative;
    left: 242px;
  }
`

// styling of leaderbord titles

export const DivCardTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: auto ;

  p{
    font-family: ${fontFamily.segoeFont};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: ${colors.leaderboardTitleColor};
  }
`

// scroll styling

export const DivCardLeaderbords = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${colors.scrollbarColor};
    border-radius: 4px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollBackgorundColor};
    border-radius: 4px;
    border: solid 2px ${colors.scrollBorderColor};
    width: 24px;
    height: 40px;
  }
`

