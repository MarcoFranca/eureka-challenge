import styled from "styled-components";
const urlImg = sessionStorage.getItem('urlImg')

export const MainStyle = styled.main`
  background-image: url(${urlImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 5.25rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  @media screen and (min-width: 1024px){
    justify-content: left;
  }
`