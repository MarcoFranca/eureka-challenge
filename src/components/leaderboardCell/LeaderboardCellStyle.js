import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";
import {fontFamily} from "../../assets/global/fontsStyle";

//style of user cells in leaderboard

export const ButtonLeaderboard = styled.button`
  width: 100%;
  border: none;
  background-color: ${colors.colorWhite};
  font-family: ${fontFamily.segoeFont};
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.leaderboardNameColor};

  .leaderContainer{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 32px;
    align-self: center;
    border-radius: 8px;
    width: 100%;
    background-color: ${colors.colorWhite};

    :hover {
      background-color: ${colors.leaderboardHooverColor};
      cursor: pointer;
    }
  }
  
  //**********  class to mark the selected cell ****************
  
  .marked{
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