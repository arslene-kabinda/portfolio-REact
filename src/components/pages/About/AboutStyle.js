import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #212121;
  height: 90vh;
  width: 100%;
  padding-top: 130px;
  font-family: "Roboto", sans-serif;

  .about_picture {
    display: flex;
    justify-content: space-around;
    border: 1px solid yellow;
    padding: 20px;
  }
  
  .profile {
    width: 38%;
    background-color:#000000; 
    border: 5px solid #ed138d ;

    /* margin-bottom: 20px; */

    img {
      width: 100%;
      border: 6px solid #212121;
      /* margin-left: 20px; */
      
    }
  }
  .about_profile {
   
    width: 50%;
    margin-right: 20x;
    display: flex;
    justify-content: end;
    border: 1px solid red;
  }
  h1 {
    text-align: start;
    color: white;
    font-size:2rem;
    font-family: "Roboto", sans-serif;
    border-bottom: solid 3px #ed138d;
    width: 10%;
    font-weight: bold;
  }
  .title {
    padding: 6px;
  }
  .about_speech {
    width: 50%;
    margin-left: 20px;
    padding: 30px;
  }
  span {
    color: #ed138d;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  p {
    color: white;
    font-family: "Roboto", sans-serif;
  }
  .link {
    margin-top: 30px;
    display: flex;
    justify-content: start;
  }
  .link1 {
    background-color: #ed138d;
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    border-radius: 50px;

    margin-right: 20px;
    font-size: 1rem;
    :hover {
      background: transparent;
      border: 1px solid #ed138d;
    }
  }
  .link2 {
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    border-radius: 50px;
    border: 1px solid white;

    margin-right: 20px;
    font-size: 1rem;
    :hover {
      border: 1px solid #ed138d;
    }
  }
`;
