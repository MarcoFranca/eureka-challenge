import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";
import {fontFamily} from "../../assets/global/fontsStyle";

//leaderboards card styling

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${colors.colorWhite};
  width: 18.75rem;
  height: 24.125rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 2px 3px ${colors.colorGray};
  z-index: 10;
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
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    color: ${colors.leaderboardTitleColor};
  }
`

// scroll styling

export const DivCardLeaderbords = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${colors.scrollbarColor};
    border-radius: 0.25rem;

  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollBackgorundColor};
    border-radius: 0.25rem;
    border: solid 0.125rem ${colors.scrollBorderColor};
    width: 1.5rem;
    height: 2.5rem;
  }
`

