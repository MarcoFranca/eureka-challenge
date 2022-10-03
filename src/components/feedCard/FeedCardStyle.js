import styled from "styled-components";
import {colors} from "../../assets/global/colorsStyle";



export const CardFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: scroll;
  background-color: ${colors.colorWhite};
  width: 300px;
  height: 386px;
  padding: 12px;
  z-index: 10;
  font-weight: 600;

  h2 {
    font-size: 16px;
    line-height: 21px;
    color: ${colors.leaderboardNameColor};
  }

  p {
    font-size: 13px;
    line-height: 17px;
    color: ${colors.leaderboardTitleColor};
  }

  .feedCountainer {
    display: flex;
    align-items: center;
    border-bottom: solid ${colors.colorGray} 1px;
    img{
      margin-right: 13px;
    }
    :last-child {
      border-bottom: none;
    }
  }
  
  .feedContent {
    
    h3 {
      margin-top: 10px;
      font-size: 12px;
      line-height: 16px;
      color: #8A94A6;
    }

    p{
      width: 90%;
      text-align: justify;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: ${colors.leaderboardNameColor};
      margin: 10px 0;
      span {
        font-weight: 600;
      }
    }
  }

  ::-webkit-scrollbar{
    display: none;
  }
}
`