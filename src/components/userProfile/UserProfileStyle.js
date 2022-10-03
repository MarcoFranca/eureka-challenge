import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${colors.colorWhite};
  width: 300px;
  height: 386px;
  border-radius: 8px;
  padding: 12px;
  z-index: 10;
`
{/*************************** first division *****************************/}

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: solid 1px ${colors.colorGray};
  height: 137px;
  color: ${colors.leaderboardTitleColor};

  h2{
    padding-left: 48px;
    width: 157px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${colors.leaderboardNameColor};
  }

  img{
    align-self: center;
    width: 60px;
    border-radius: 50%;
  }

  details {
    padding: 0 48px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    summary {
      display: flex;
      justify-content: space-between;
      list-style: none;
      cursor: pointer;

      img{
        width: 20px;
        transition: transform 500ms;
      }

      ::-webkit-details-marker {
        display: none;
      } } }
`

{/*************************** second division *****************************/}

export const DivMemberDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-bottom: solid 1px ${colors.colorGray};
  height: 85px;

  h3{
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: ${colors.leaderboardNameColor};
    span{
      color: ${colors.leaderboardTitleColor};
      font-size: 14px;
    }
  }

  p{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.leaderboardTitleColor};
  }
  .userStatus{
    display: flex;
    img{
      margin-right: 4px;
    }

  }
`

{/*************************** third division *****************************/}

export const DivTierTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px ${colors.colorGray};
  height: 85px;

  .tierContent {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      color: ${colors.leaderboardNameColor};
    }

    .nextTier {
      display: flex;
      align-items: center;
      gap: 4px;

      img {
        width: 12px;
        height: 12px;
      }

      p {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: ${colors.leaderboardNameColor};

        span {
          margin-right: 4px;
          color: ${colors.leaderboardTitleColor};
        }
      }
    }
  }

  .fillContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }

/*************************** tier marks *****************************/
  
  .tierMark {

    width: 10px;
    height: 10px;
    border: solid gray 1px;
    border-radius: 50%;
    position: relative;

    :last-child {
      margin-right: 0;

      :after {
        display: none;
      }
    }

    :after {
      content: '';
      width: 64px;
      height: 2px;
      position: absolute;
      background: #B5BAC8;
      top: 5px;
      left: 16px;
    }
  }

  .tierMarked {
    background: radial-gradient(circle, rgba(52, 136, 219) 0, rgb(52, 136, 219) 40%, #FFFFFF 45%);
    border: solid rgba(52, 136, 219) 2px;
  }

`