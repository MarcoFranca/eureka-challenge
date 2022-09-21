import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";
import {fontFamily} from "../../assets/global/fontsStyle";

//style of user cells in leaderboard

export const ButtonLeaderboard = styled.button`
  display: grid;
  width: calc(100% - 8px);
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 32px;
  align-self: center;
  border-radius: 8px;
  border: none;
  background-color: ${colors.colorWhite};
  font-family: ${fontFamily.segoeFont};
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.leaderboardFontColor};

  :hover {
    background-color: ${colors.leaderboardHooverColor};
  }

  p {
    justify-self: center;
    align-self: center;
  }

  div {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13px;
  }

  img {
    height: 24px;
    border-radius: 50%;
    margin: 0 8px;
  }
`