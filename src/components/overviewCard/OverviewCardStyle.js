import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";


export const CardContainer = styled.div`
  display: none;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${colors.colorWhite};
  width: 300px;
  height: 386px;
  border-radius: 8px;
  padding: 8px;
  z-index: 10;
`
export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px ${colors.colorGray};
  height: 149px;
  color: ${colors.leaderboardTitleColor};

  h2{
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${colors.leaderboardNameColor};
  }

  img{
    width: 60px;
    border-radius: 50%;
  }

  details {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    summary {
      display: flex;
      list-style: none;
      cursor: pointer;
      img{
        width: 20px;
        transition: transform 500ms;
      }
      ::after {
        content: '';
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
      }
      ::-webkit-details-marker {
        display: none;

      }
    }
  }
  details[open] {
    summary{
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      img{
        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        transition: transform 500ms;
      }
      :after {
        content: "";
        font-size: 0.5rem;
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
      }}}
`

export const DivMemberDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: solid 1px ${colors.colorGray};
  height: 85px;
`

export const DivTierTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${colors.colorGray};
  height: 85px;

`